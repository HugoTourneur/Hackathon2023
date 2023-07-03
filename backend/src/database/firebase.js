const { initializeApp, getApp } = require('firebase/app')
const { firebase } = require('../config')

const initFirebase = () => {
  initializeApp(firebase)
}

const getFirebase = () => getApp()

module.exports = {
    initFirebase,
    getFirebase
}