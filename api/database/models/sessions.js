const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    SessionToken:{
        type:String,
        unique:true
    },
    User:{
        type:String
    }
});

/* Exports As Session */
const Session = mongoose.model('Session', SessionSchema);
module.exports = Session;