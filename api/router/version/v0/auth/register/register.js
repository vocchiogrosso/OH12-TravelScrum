require('dotenv').config();
const chalk = require('chalk');
const crypto = require('crypto');
const randomstring = require('randomstring');
// Models
const User = require('../../../../../database/models/user'); 

module.exports={
    registerUser
}

async function registerUser(req,res){
    try {
        console.log('Creating User');
        console.log(req.body)
        var result = await User.create({
            AccountAuthed:false,
            AccountPin:randomstring.generate({length: 8,charset: 'numeric'}),
            Email:req.body.Email,
            Password:crypto.pbkdf2Sync(req.body.Password,process.env.ENC_HASH,20000,128,'sha512').toString('hex'),
            FirstName:'',
            LastName:'',
            PhoneNumber:'',
        });
        res.sendStatus(200);
        console.log(chalk.blue("Sent Successfully"));
    }catch(error) {
        console.log(chalk.red("Unsuccessful"));
        console.log(error);
        res.sendStatus(500);
    }
}