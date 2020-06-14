require('dotenv').config();
const chalk = require('chalk');
const crypto = require('crypto');
const randomstring = require('randomstring');
// Models
const User = require('../../../../../database/models/user'); 
const Session = require('../../../../../database/models/sessions');

module.exports={
    loginUser
}

async function loginUser(req,res){
    try {
        console.log('User Search');
        var result = await User.findOne({ 
            Email: req.body.Email, 
            Password: (crypto.pbkdf2Sync(req.body.Password,process.env.ENC_HASH,20000,128,'sha512').toString('hex'))
        });
        if(!result) {
            console.log('No User Found');
            return res.status(400).send(result);
        }
        console.log('User Found/Creating Session');
        var session = await Session.create({
            SessionToken:(crypto.randomBytes(128).toString('hex')),
            User:result._id
        });
        res.status(200).send({"SessionToken":session.SessionToken});
    }catch(error) {
        console.log(chalk.red("Unsuccessful"));
        console.log(error);
        res.sendStatus(500);
    }
}