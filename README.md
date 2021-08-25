# module3 README

Final Project Readme, this shows the resources I used to complete this project along with other information.

## Name: Silas Lenihan

### Timeline

Start Date: 4/7/21

Finish Date: 4/28/21

Hours Spent: 40-50

# Setup instructions:
Generate new google Oauth credentials to place in secrets.js file within src/server/secrets.js
Documentation on how to do this can be found here: https://support.google.com/googleapi/answer/6158849?hl=en

Generate new Firebase credentials
1. Documentation on how to do this can be found here: https://firebase.google.com/docs/web/setup
2. Create a users directory in your firebase instance so that data can be saved.
    a. To make yourself an admin, simply log into the app for the first time, then go to your firebase instance and alter your role to be "admin" instead of "user."

You should be ready to launch the app locally then. 

# Database/User description
My database has 4 major sections: logs, images, sounds, and users
1. Logs have a list of any time a user logs in, saves a progression, or logs out.
1. Images simply stores the image files that referenced in the app.
2. Sounds does the same but for audio files.
3. Users stores the list of users and the following data associated with each of them:
    a. email
    b. progressions (a list of saved chord progression that can be dynamically added to / removed from)
    c. role: either "user" or "admin" depending on access level.
        - admin users have the priviledge of seeing the logs from all users.

### Assignment Notes
Known Bugs: 
1. Login/Logout does not work on mobile.
2. Sometimes the images take 10 seconds to load.

Resiliency: There is no way for the user to input bad data resulting in an internal server error on the webpage, since the app restricts the only possible inputs on the front end. The only possible inputs are key (which is a dropdown select menu), login, logout, save, and delete. 

### Framework choices:
Originally I had decided to try to use a framework called the Scales Chords API. This framework seemed incredibly convienient for the project at first, because I could easily display and listen to chords from. There were two major issues that made me decide to go a different route however. 
1. I was able to get this to work reactively. For example, the chords would load flawlessly upon first load, however, when I tried to change the key the chords would simply go away. After days and days of trial and error I decided to give up and spend my time uploading the assets manually. That is why I have a database containing sounds and audio files.
2. There was no way to automatically play the chords in a sequence.

The second major decision I made framework wise was to go with the Tonal JS API. Originally I had planned to manually input all the chord metadata and store that either on my backend or in my database, however, I discovered the Tonal JS API which allowed me to dynamically access this data whenever I needed. It also has provided a much larger degree of flexibility and room from improvement for future upgrades.

# Future upgrades:
1. Download MIDI files from the chord progressions.
2. Drag and drop chords
3. Change the tempo of progression
4. Add more chords (sevenths, diminished, etc)
5. Suggested chord progressions
6. List key information

# Resources Used
https://www.scales-chords.com/api/#reference
https://www.piano-keyboard-guide.com/keyboard-chords.html
https://github.com/tonaljs/tonal
https://stackoverflow.com/questions/49609719/module-not-found-error-when-deployed-on-heroku
https://cloud.google.com/appengine/docs/flexible/nodejs/using-cloud-storage
https://pro9ram.wordpress.com/2013/02/21/playing-html-5-audio-sequentially-via-javascript/
https://www.sitepoint.com/delay-sleep-pause-wait/
https://firebase.google.com/docs/database/admin/start
https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
https://stackoverflow.com/questions/26537720/how-to-delete-remove-nodes-on-firebase
https://www.w3schools.com/howto/howto_js_topnav.asp
https://stackoverflow.com/questions/53608244/how-to-add-multiple-data-types-for-vuejs-props
https://vuejs.org/v2/guide/conditional.html
https://www.w3schools.com/html/html_links_colors.asp
https://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
https://github.com/airbnb/javascript/issues/2202
https://www.w3schools.com/css/css_align.asp
https://www.quackit.com/html/codes/html_scroll_box.cfm
https://stackoverflow.com/questions/54418163/background-color-doesnt-apply-to-whole-page-vue-js


