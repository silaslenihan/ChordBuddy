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
        userData = await getData(id, email);

        console.log(userData);
        res.json({
            displayName: req.user?.displayName,
            email,
            progressions: userData.progressions
        });
    },
);

async function getData (userID, email) {
    let userRef = db.ref(`users/${userID}`);
    const snapshot = await userRef.once('value');
    userData = snapshot.val();
    // if user is logged in and they have no userData, then we must initialize that user in Firebase. 
    if (userID != '<none>' && userData == null) {
        userRef.set({
            "email":email,
            "progressions": []   
        });
        userData = {
            "email": email,
            "progressions:":[]
        }
    }

    return userData;
}

// API to save user's progressions
app.put(
    '/api/progression',
    (req, res) => {
        colors[`user:${extractUserId(req)}`] = req.body;
        res.json({ status: 'ok' });
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('App listening on port ' + PORT));