const {URL} = require('url');

module.exports = {
    _SendEmail
}

const Account = require('../../../../../database/models/users/account');
const Session = require('../../../../../database/models/users/sessions');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function _SendEmail(req, res) {
    try {
        console.log('User Search');
        var session = await Session.findOne({
            SessionToken: req.headers.authorization
        });
        if (!session) {
            console.log('Not Found');
            res.status(400).send();
            return;
        }
        var account = await Account.findById(session.UserID);
        console.log(account);
        if (!account) {
            res.status(500).send();
            return;
        }

        const link = new URL('/auth/verifyEmail', process.env.API_HOST);
        link.searchParams.append('AccountPin', account.AccountPin);
        const msg = {
            to: account.Email,
            from: 'no-reply@microsoft.com',
            subject: 'Verify your TravelBook account',
            text: 'Lets get your all settled in...',
            html: '<strong>Your Code Is: ' + account.AccountPin + '</strong><br /> <a href="' + link.href + '">Click here</a> to verify your email',
        };
        console.log(msg);
        sgMail.send(msg);
        console.log('Email Sent');

        res.status(200).send();
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}