var url =require("url");
var firebase=require("../config/firebase");
var db =firebase.firebase_app().database();

exports.get_api=function(req,res){

}

exports.get_data_api=function(req,res){
    
    db.ref("/api").child(req.params.id).once("value",(snp)=>{
        var data={
            type:snp.toJSON().type,
            data:snp.toJSON().data
        }
        return res.send (data);
    });
}

exports.get_data_with_querry_api=function(req,res){
    var url_part= url.parse(req.url,true);
    var data_final;
    var params=url_part.query;
    db.ref("/api").child(req.params.id).once("value",(snp)=>{
        var data={
            type:snp.toJSON().type,
            data:snp.toJSON().data
        }
        return res.send (data);
    });
    for(var key in params){
        final.push(key);
    }
    return res.send(final);
    
}

exports.delete_one_data_api=function(req,res){
    
}

exports.update_one_data_api=function(req,res){

}