import express from "express"

import cookieParser from "cookie-parser"

import 'dotenv/config'
import config from "./src/config.js"

import {getFirebase, initAdminFirebase, initFirebase} from "./src/database/firebase.js"

import AuthRoute from "./src/routes/AuthRoute.js"
import EstateRoute from "./src/routes/EstateRoute.js"


const app = express();
app.use(express.json())
app.use(cookieParser())
initFirebase()
initAdminFirebase()

const firebase = getFirebase()

AuthRoute({app, firebase})
EstateRoute({app, firebase})
app.listen(config.port, () => {
  console.log('Server listening on port 3000');
})