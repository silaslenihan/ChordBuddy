const express = require('express');
const app = express();
const cors = require('cors');

var json_data = [];
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
        console.log(key);
        chords = Key.minorKey(key).natural.chords;
        console.log("minor!");
    } else {
        chords = Key.majorKey(key).chords;
    }
    console.log(chords);
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
    console.log(chords);
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
            for (let i = 0; i < files[0].length; i++) {
                console.log(files[0][i].publicUrl());
            }

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