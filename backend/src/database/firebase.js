import config from "../config.js"


import {getApp as getAdminApp} from "firebase-admin/app"


import admin from "firebase-admin"

import {getApp, initializeApp} from "firebase/app"

const { firebase: { admin: adminCreds, ...basic } } = config
export const initFirebase = () => {
    initializeApp(basic)
}

export const initAdminFirebase = () => {
    admin.initializeApp({
        credential: admin.credential.cert(adminCreds),
        databaseURL: config.firebase.databaseURL,
        projectId: config.firebase.projectId
    })
}

export const getFirebase = () => getApp()
export const getAdminFirebase = () => getAdminApp()

