const express = require('express');
const app = express();
const cors = require('cors');

var json_data = [];
app.use(cors());

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

app.get('/api/get_chords.json', (req, res) => {
    key = req.query.key;
    res.json(
        getChords(key)
    );
  });

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log('App listening on port ' + PORT));