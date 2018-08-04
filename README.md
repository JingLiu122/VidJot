# VidJot
## Overview
VidJot is a web-app that can help the users to jotting down their video ideas for their future uploading (*Youtube, Twitch, etc.*). To create a quality video with strong content, the user better have to plan, script, and edit their ideas first before delivering it to the viewers. VidJot serves the purpose of that. Also if the users is a full-time or hard-core video uploader/editor, VidJot can help them to manage and organize their uploading schudle.

VidJot is also a live application on the internet: [here is a link](https://evening-hollows-65498.herokuapp.com/).

## Getting Started
Even though the application is live on the internet, the following instructions will only serve to the local copy of the project up and running for development, testing, and maintance purposes.

### Prerequisites
Install and setup MongoDB first for the app to function properly becuase the local app is connecting to the local mongodb, whereas the live one is connecting to the mLab.
  * [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/?_ga=2.235436548.4094096.1533414753-345378373.1529090851)

### How To Run
Run the following commands in terminal:
```
mongod
```
On another terminal:
```
npm install
node app.js
```
-Or
 ```
 npm start (if nodemon installed locally)
 ```
### Libraries

## Deployment
This application is deployed by [Heroku](https://www.heroku.com/).
