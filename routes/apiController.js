var firebase=require("../config/firebase");
var db =firebase.firebase_app().database();

exports.all_api_list=function(req,res){
    db.ref("/api").once("value",(snp)=>{
        if(!snp.exists())
            return res.send({error:"Error in url you send!!!!!! :-p"});
        return res.send (snp.toJSON());
    });
}

exports.get_one_api=function(req,res){
    db.ref("/api").child(req.params.id).once("value",(snp)=>{
        if(!snp.exists())
            return res.send({error:"Error in url you send!!!!!! :-p"});
        return res.send (snp.toJSON());
    });
}

// exports.get_one_api=function(req,res){
    
// }

exports.delete_api=function(req,res){

}
exports.new_api=function(req,res){

}
exports.update_info_api=function(req,res){

}