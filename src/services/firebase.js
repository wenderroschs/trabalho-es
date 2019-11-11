const config = {
    apiKey: "AIzaSyC7I75tjIdWHKftvlWJ8fGpkenvxaOI488",
    authDomain: "tarefator.firebaseapp.com",
    databaseURL: "https://tarefator.firebaseio.com",
    projectId: "tarefator",
    storageBucket: "tarefator.appspot.com",
    messagingSenderId: "928178335512",
    appId: "1:928178335512:web:6e528ac7a582386b36b86d",
    measurementId: "G-9B7N2J1KVB"
};

const firebase = require('firebase');

firebase.initializeApp(config);

export const db = firebase.database();
