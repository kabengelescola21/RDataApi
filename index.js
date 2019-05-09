const uuid = require('uuid/v4');
const http = require('http');
const firebase=require('./config/firebase');
const port = 3000;
var express = require('express');
var app = express();
var router=express.Router();

/*
    CHARGEMENT DES CONTROLLERS
*/
var apiController=require('./routes/apiController');
var apiDetailController=require('./routes/apiDetailControllers');

/* 
    Les routes de l'objet api
*/

app.delete('/api/:id',(req,res)=>{
    apiController.delete_api(req,res);
});

app.put('/api/:id/update',(req,res)=>{
    apiController.update_info_api(req,res);
});

app.get('/api',(req,res)=>{
    
    apiController.all_api_list(req,res);
});

app.post('/api/new',(req,res)=>{
    apiController.new_api(req,res);
});

app.get('/api/:id/details',(req,res)=>{
    apiController.get_one_api(req,res);
});

/*
    Les controlleurs des details de l'API
*/

app.get('/api/:id/details/data',(req,res)=>{
    apiDetailController.get_data_api(req,res);
});

app.post('/api/:id/detail/data/add',(req,res)=>{
    apiDetailController.add_data_api(req,res);
});

app.put('/api/:id/detail/data/update',(req,res)=>{
    apiDetailController.update_one_data_api(req,res);
});

app.get('/api/:id/details/data/querry',(req,res)=>{
    apiDetailController.get_data_with_querry_api(req,res);
});
//router.get('/api/:id/detail')
// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function(req, res) {
//   res.send('hello world');
// });

// app.get('/api/:id',(req,res)=>{
//     if(req.params.id>=users.length)
//     {
//         var error =new Error("No data found")
//         return res.send(error);
//     }else{
//         return res.send((users[req.params.id]));
//     }
// });

app.listen(port);