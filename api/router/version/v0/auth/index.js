const router = require('express').Router();
//const authentication = require('../../../../middleware/authentication/authentication');
//
const login = require('./login/login');
router.post('/login', /*authentication.is,*/(req, res) => {
    login.loginUser(req, res);
});

const { verifyEmail } = require('./verifyEmail');
router.get('/verifyEmail', verifyEmail);

const { _SendEmail } = require('./sendEmail');
router.post('/sendEmail', _SendEmail);

const register = require('./register/register');
router.post('/register', /*authentication.isNot,*/(req, res) => {
    register.registerUser(req, res);
})
//
module.exports = router;