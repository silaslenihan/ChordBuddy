// temporary function used to initialize database w/ images. 
async function uploadImages() {
    images = ['Abdim.png',     'Abm.png',
    'Abmaj.png',     'Adim.png',      'Am.png',
    'Amaj.png',      'Asharpm.png',   'Bbdim.png',
    'Bbm.png',       'Bbmaj.png',     'Bdim.png',
    'Bm.png',        'Bmaj.png',      'Bsharpdim.png',
    'Cbmaj.png',     'Cdim.png',      'Cm.png',
    'Cmaj.png',      'Csharpdim.png', 'Csharpm.png',
    'Csharpmaj.png', 'Dbm.png',       'Dbmaj.png',
    'Ddim.png',      'Dm.png',        'Dmaj.png',
    'Dsharpdim.png', 'Dsharpm.png',   'Ebdim.png',
    'Ebm.png',       'Ebmaj.png',     'Edim.png',
    'Em.png',        'Emaj.png',      'Esharpdim.png',
    'Esharpm.png',   'Fbmaj.png',     'Fdim.png',
    'Fm.png',        'Fmaj.png',      'Fsharpdim.png',
    'Fsharpm.png',   'Fsharpmaj.png', 'Gbmaj.png',
    'Gdim.png',      'Gm.png',        'Gmaj.png',
    'Gsharpdim.png', 'Gsharpm.png',   'Gsharpmaj.png'
  ]
    
    var fs = require('fs');
    var files = fs.readdirSync('./assets/sounds/');
    sounds = [
        'Abdim [2021-04-19 180111].mp3',
        'Abm [2021-04-19 180125].mp3',
        'Abmaj [2021-04-19 180128].mp3',
        'Adim [2021-04-19 180129].mp3',
        'Am [2021-04-19 180130].mp3',
        'Amaj [2021-04-19 180131].mp3',
        'Asharpm [2021-04-19 180132].mp3',
        'Bbdim [2021-04-19 180133].mp3',
        'Bbm [2021-04-19 180134].mp3',
        'Bbmaj [2021-04-19 180135].mp3',
        'Bdim [2021-04-19 180136].mp3',
        'Bm [2021-04-19 180137].mp3',
        'Bmaj [2021-04-19 180138].mp3',
        'Bsharpmin [2021-04-19 180139].mp3',
        'Cbmaj [2021-04-19 180140].mp3',
        'Cdim [2021-04-19 180141].mp3',
        'Cm [2021-04-19 180142].mp3',
        'Cmaj [2021-04-19 180143].mp3',
        'Csharpdim [2021-04-19 180144].mp3',
        'Csharpm [2021-04-19 180145].mp3',
        'Csharpmaj [2021-04-19 180147].mp3',
        'Dbm [2021-04-19 180147].mp3',
        'Dbmaj [2021-04-19 180148].mp3',
        'Ddim [2021-04-19 180149].mp3',
        'Dm [2021-04-19 180150].mp3',
        'Dmaj [2021-04-19 180154].mp3',
        'Dsharpdim [2021-04-19 180155].mp3',
        'Dsharpm [2021-04-19 180156].mp3',
        'Ebdim [2021-04-19 180157].mp3',
        'Ebm [2021-04-19 180158].mp3',
        'Ebmaj [2021-04-19 180200].mp3',
        'Edim [2021-04-19 180201].mp3',
        'Em [2021-04-19 180202].mp3',
        'Emaj [2021-04-19 180203].mp3',
        'Esharpdim [2021-04-19 180204].mp3',
        'Esharpm [2021-04-19 180205].mp3',
        'Fbmaj [2021-04-19 180206].mp3',
        'Fdim [2021-04-19 180207].mp3',
        'Fm [2021-04-19 180208].mp3',
        'Fmaj [2021-04-19 180209].mp3',
        'Fsharpdim [2021-04-19 180210].mp3',
        'Fsharpm [2021-04-19 180211].mp3',
        'Fsharpmaj [2021-04-19 180214].mp3',
        'Gbmaj [2021-04-19 180215].mp3',
        'Gdim [2021-04-19 180217].mp3',
        'Gm [2021-04-19 180219].mp3',
        'Gmaj [2021-04-19 180220].mp3',
        'Gsharpdim [2021-04-19 180221].mp3',
        'Gsharpm [2021-04-19 180222].mp3',
        'Gsharpmaj [2021-04-19 180223].mp3'
      ]

      for(let i = 0; i < sounds.length; i++) {
          filepath = './assets/Sounds/' + sounds[i];
          remoteName = 'sounds/' + sounds[i].split(' ')[0] + '.wav';
          console.log(remoteName);
          await IMAGES_REF.upload(filepath, { destination: remoteName, public: true });
          const soundURL = await IMAGES_REF.file(remoteName).publicUrl();
          console.log(soundURL);
  
      }
    // files.forEach(element => 
    //     sounds.push(element.split(' ')[0] + '.mp3')
    // );
    // console.log(files);
    // filepath = './assets/Sounds/Abdim.mp3'
    // remoteName = 'sounds/Abdim.mp3'
    // await IMAGES_REF.upload(filepath, { destination: remoteName, public: true });
    // const imageURL = await IMAGES_REF.file(remoteName).publicUrl();
    // console.log(imageURL);
    

    x
}