# VidJot
## Overview
VidJot is a web-app that can help the users to jot down their video ideas for their future uploading (*Youtube, Twitch, etc.*). To create a quality video with strong content, the user better has to plan, script, and edit their ideas first before delivering it to the viewers. VidJot serves the purpose of that. Also if the users is a full-time or hard-core video uploader/editor, VidJot can help them to manage and organize their uploading schedule.

VidJot is also a live application on the internet: [here is a link](https://evening-hollows-65498.herokuapp.com/) (no domain name yet).

## Getting Started
Even though the application is live on the internet, the following instructions will only serve to the local copy of the project up and running for development, testing, and maintanence purposes.

### Prerequisites
Install and setup MongoDB first for the application to function properly because the local app is connecting to the local mongodb, whereas the live one is connecting to the mLab.
  * [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/?_ga=2.235436548.4094096.1533414753-345378373.1529090851)

### How To Run
Run the following commands in a terminal:
```
mongod
```
On another terminal:
```
npm install
```
```
node app.js
or
npm start (if nodemon installed locally)
```
On the browser and type ```http://localhost:3000``` on the URL path.
### Libraries
```
express-handlebars
```
* https://github.com/ericf/express-handlebars
* used as the template engine for the project
```
method-override
```
* https://github.com/expressjs/method-override
* allow using HTTP verbs on the client side
```
connect-flash
```
* https://github.com/jaredhanson/connect-flash
* used to send messages to views (alert a success or failure message)
```
express-session
```
* https://github.com/expressjs/session
* used for establishing sessions with clients of the site and for authentication
```
body-parser
```
* https://github.com/expressjs/body-parser
* used to retrieve the body of requests.
```
passport
```
* https://github.com/jaredhanson/passport
* used to authenticate the credential request (with local strategy)
```
mongoose
```
* https://github.com/Automattic/mongoose
* used to define schemas and create models that connect to the database

## Deployment
This application is deployed by [Heroku](https://www.heroku.com/).

## Acknowledgements
This project was developed from a lecture "Node.js, Express & MongoDB Dev to Deployment" that instructed by Brad Traversy on [Udemy](https://www.udemy.com/nodejs-express-mongodb-dev-to-deployment/). 
