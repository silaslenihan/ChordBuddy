const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// provide global access to remote storage
const { FIREBASE_CONFIG } = require('./secrets');
const { Storage } = require('@google-cloud/storage');

const admin = require("firebase-admin");
//init realtime database
admin.initializeApp({
  credential: admin.credential.cert(FIREBASE_CONFIG),
  databaseURL: "https://chords-72fdf-default-rtdb.firebaseio.com"
});

// set up logging
const morgan = require('morgan');
const morganBody = require('morgan-body');

app.use(morgan('\n\n:method :url :status :res[content-length] - :response-time ms'));
app.use(express.json());
// morganBody(app, {
//     logRequestBody: true,
//     logAllReqHeader: true,
//     logResponseBody: true,
//     logAllResHeader: true,
// });

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();

const storage = new Storage({
    credentials: {
        client_email: FIREBASE_CONFIG.client_email,
        private_key: FIREBASE_CONFIG.private_key
    }
});
// note, using the default bucket name 
const IMAGES_REF = storage.bucket(`${FIREBASE_CONFIG.project_id}.appspot.com`);


// Import tonaljs API
const { Key } = require("@tonaljs/tonal");


// set up authentication
const auth = require('./authentication.js');
auth.setupAuthentication(app);

function extractUserId(req) {
    return req.user?.id || '<none>';
}

// API for getting information on the logged in user
app.get(
    '/api/user',
    async (req, res) => {
        // extract out the useful parts of the req.user object
        const id = extractUserId(req);
        const email = req.user?.emails ? req.user.emails[0].value : null;
        const type = req.query.type;
        if (id != '<none>') {
            userData = await getData(id, email,type);
        }
        else {
            userData = {
                "email": "",
                "progressions:":[],
                "role":""
            }
        }

        res.json({
            displayName: req.user?.displayName,
            email: email,
            progressions: userData.progressions,
            userID: id,
            role: userData.role
        });
    },
);

async function getData (userID, email, type) {
    log = "";
    let userRef = db.ref(`users/${userID}`);
    const snapshot = await userRef.once('value');
    userData = snapshot.val();
    
    // if user is logged in and they have no userData, then we must initialize that user in Firebase. 
    if (userID != '<none>' && userData == null) {
        log = `New user created: (Email: ${email} userID: ${userID}) at ${currentTime()}`
        userData = {
            "email": email,
            "progressions:":[],
            "role": "user"
        }
        userRef.set({
            "email": email,
            "progressions:":[],
            "role": "user"
        });
        

    }
    else {
        log = `User logged in: (Email: ${email} userID: ${userID}) at ${currentTime()}`
    }
    if (log != "" && type == "login") {
        let logsRef = db.ref('logs');
        logsRef.push(log);
    }
    
    return userData;
}

// get current date. See README for source.
function currentTime() { 
    var currentdate = new Date(); 
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    return datetime;
}

// remove a given chord progression
app.put(
    '/api/remove',
    (req,res) => {
        const index = req.body.index;
        const userID = req.body.userID;
        const email = req.body.email;
        let userRef = db.ref(`users/${userID}`);
        progression = userRef.child(`progressions/${index}`);
        progression.remove();
        log = `User deleted progression: (Email: ${email} userID: ${userID}) at ${currentTime()}`
        let logsRef = db.ref('logs');
        logsRef.push(log);
        res.json({ status: 'ok' });

    }
)

// API to save user's progressions
app.put(
    '/api/progression',
    (req, res) => {
        userID = extractUserId(req);
        let email = req.body.email;
        let ref = db.ref(`users/${userID}/progressions`);
        let chords = req.body.prog;
        console.log(chords);
        ref.push(chords);
        res.json({ status: 'ok' });

        log = `User deleted progression: (Email: ${email} userID: ${userID}) at ${currentTime()}`
        let logsRef = db.ref('logs');
        logsRef.push(log);
    },
);

function getChords(key) {
    // Use Tonal JS to find chords in a given key
    chords = {}
    if (key.includes("m")) {
        key = key.replace("m","");
        chords = Key.minorKey(key).natural.chords;
    } else {
        chords = Key.majorKey(key).chords;
    }
    //format returned data to our liking.
    for(let i=0; i < chords.length; i++) {
        if (chords[i].includes("m7b5")) {
            chords[i] = chords[i].replace("m7b5","dim");
        }
        chords[i] = chords[i].replace("7",'');
        chords[i] = chords[i].replace("#",'sharp');
        if(! chords[i].includes("m")) {
            chords[i] = chords[i] + "maj";
        }
    }
    json = chords
    
    return json;
}


app.get(
    '/api/getImages',
    async (req, res, next) => {
        try {
            // retrieve a list of files saved in storage bucket
            const files = await IMAGES_REF.getFiles();
            // get just the data useful to report back to frontend, do not want to store data on the server
            const imageURLs = files[0].filter(f => (!f.publicUrl().endsWith('/')))
                                      .map(f => ({ url: f.publicUrl(), alt: f.name.split('/').pop() }));
            
            res.status(200);
            res.json(imageURLs);
        }
        catch (error) {
            console.log(error);
            res.status(500);
            next(error);
        }
    }
);

app.get('/api/get_chords.json', (req, res) => {
    key = req.query.key;
    res.json(
        getChords(key)
    );
  });

  app.get('/api/getLogs', async (req, res) => {
    let logsRef = db.ref('logs');
    const logsSnap = await logsRef.once('value');
    let logsData = logsSnap.val();
    res.json(
        logsData
    );
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('App listening on port ' + PORT));