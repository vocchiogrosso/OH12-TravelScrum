const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    AccountAuthed:{
        type:Boolean,
        required:true
    },
    AccountPin:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        unique:true,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    DOB:{
        type:String
    },
    ProfilePic:{
        type:String,
        data:Buffer
    }
});  

/* Exports As User */
const User = mongoose.model('User', UserSchema);
module.exports = User;