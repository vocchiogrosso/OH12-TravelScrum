const Session = require('../../database/models/users/sessions');

async function is(req, res, next) {
    if(localStorage.getItem('SessionToken')!=undefined){
        var search = Session.findOne({ 
            SessionToken:localStorage.getItem('SessionToken')
        });
        if(!search){
            return res.sendStatus(400);
        }
        console.log(search);
        res.send();
    }
}

async function isNot(req, res, next) {
    localStorage.clear();
}

module.exports = {
    is,
    isNot
}