// Your web app's Firebase configuration
var firebase=require('firebase');
var firebaseConfig = {
    apiKey: "api-key",
    authDomain: "auth-domain",
    databaseURL: "url",
    projectId: "project-id",
    storageBucket: "str-bucket",
    messagingSenderId: "sender-id",
    appId: "ap-id"
};    
function app_fireBase() {
    firebase.initializeApp(firebaseConfig) ;
    return firebase
}
var app=null;

exports.firebase_app=()=>{
    if(app==null)
        app=app_fireBase();
    return app;
}
