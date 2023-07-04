import express from "express"
import cookieParser from "cookie-parser"
import 'dotenv/config'
import config from "./src/config.js"

import swaggerAutogen from 'swagger-autogen';
import swaggerUi from 'swagger-ui-express';
import swaggerJson from './src/utils/swagger/swagger-output.json' assert { type: "json" };

import {getFirebase, initAdminFirebase, initFirebase} from "./src/database/firebase.js"

import AuthRoute from "./src/routes/AuthRoute.js"
import EstateRoute from "./src/routes/EstateRoute.js"

const doc = {
  info: {
    title: 'API',
    description: 'Endpoints for the API',
  },
  host: 'localhost:3001',
  schemes: ['http'],
};

const outputFile = './src/utils/swagger/swagger-output.json';
const endpointsFiles = ['./src/routes/AuthRoute.js', './src/routes/EstateRoute.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerJson));


initFirebase()
initAdminFirebase()

const firebase = getFirebase()

AuthRoute({app, firebase})
EstateRoute({app, firebase})
app.listen(config.port, () => {
  console.log('Server listening on port 3000');
})