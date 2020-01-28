const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./utils/fbauth');
const { signUp, logIn, uploadImage } = require('./handlers/users');
const { getAllScreams, postOneScream } = require('./handlers/screams');

// scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);

// user routes
app.post('/signup', signUp);
app.post('/login', logIn);
app.post('/user/image', FBAuth, uploadImage);

exports.api = functions.https.onRequest(app);
