const router = require('express').Router();
//
const v0 = require('./version/v0/index');
const v1 = require('./version/v1/index');

router.use('/v0',v0);
// router.use('/v1',v1);

// Default If Not Specifed
router.use('/',v0);
//
module.exports = router;