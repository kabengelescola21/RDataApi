// Your web app's Firebase configuration
var firebase=require('firebase');
var firebaseConfig = {
    apiKey: "AIzaSyCSyjSHoTBRvxotLy09oxB3-lZ4UitiDyc",
    authDomain: "rdata-69dfd.firebaseapp.com",
    databaseURL: "https://rdata-69dfd.firebaseio.com",
    projectId: "rdata-69dfd",
    storageBucket: "rdata-69dfd.appspot.com",
    messagingSenderId: "64543873477",
    appId: "1:64543873477:web:f6e103209f44670f"
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
