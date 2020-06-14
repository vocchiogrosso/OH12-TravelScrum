const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    UserID: {
        type: mongoose.ObjectId,
        required: true
    },
    SessionToken: {
        type: String,
        unique: true
    },
    Expiration: {
        type: Date,
        required: true
    }
});

/* Exports As Session */
const Session = mongoose.model('Session', SessionSchema);
module.exports = Session;