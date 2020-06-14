require('dotenv').config();
const chalk = require('chalk');
const crypto = require('crypto');
// Models
const Account = require('../../../../../database/models/users/account');
const Session = require('../../../../../database/models/users/sessions');

module.exports = {
    verifyEmail
}

async function verifyEmail(req, res) {
    try {
        console.log('User Search');
        const accountPin = req.query.AccountPin;
        console.log(accountPin);
        var account = await Account.findOne({
            AccountPin: accountPin,
        });
        if (!account) {
            console.log('No User Found');
            return res.status(400).send(result);
        }
        account.AccountAuthed = true
        account.save();

        res.redirect(process.env.WEB_AUTH_URL);
    } catch (error) {
        console.log(chalk.red("Unsuccessful"));
        console.log(error);
        res.sendStatus(500);
    }
}