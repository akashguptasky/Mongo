const mongoose =require('mongoose');


const fbReocrd=new mongoose.Schema({
        userName:String,
        firstName:String,
        lastName:String,
        password:String,
        mobileNumber:{
                type:String,
                required:true,
                minlength:10,
                maxlength:10,
                unique:true
        }

},{timestamps:true})

module.exports = mongoose.model('fbUser',fbReocrd) //
