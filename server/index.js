const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// provide global access to remote storage
const { FIREBASE_CONFIG } = require('./secrets');
const { Storage } = require('@google-cloud/storage');
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

// app.post(
//     '/api/addImage',
//     // check parameters from the user to make sure they are all included
//     validateUserData([ 'title' ], 'body'),
//     validateUserData([ 'image' ], 'files'),
//     // can now assume complete user data, so do the work to change data structure
//     async (req, res, next) => {
//         // get file info parsed from HTTP metadata
//         const newImage = req.files.image;
//         // choose name, including any organizational folders, to use on remote storage
//         const remoteName = `images/${newImage.name}`;
//         // save the image to the Cloud PUBLICLY so it can accessed by the frontend directly
//         await IMAGES_REF.upload(newImage.tempFilePath, { destination: remoteName, public: true });
//         // get URL link to stored data
//         const imageURL = await IMAGES_REF.file(remoteName).publicUrl();
//         res.status(200);
//         res.json({ alt: req.body.title, url: imageURL });
//     }
// );



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