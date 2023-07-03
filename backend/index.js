const express = require('express');
require('dotenv').config()
const { port } = require('./src/config');
const { initFirebase, getFirebase } = require('./src/database/firebase');
const AuthRoute = require('./src/routes/AuthRoute');
const app = express();
app.use(express.json())

initFirebase()

const firebase = getFirebase()

AuthRoute({app, firebase})
app.listen(port, () => {
  console.log('Server listening on port 3000');
})