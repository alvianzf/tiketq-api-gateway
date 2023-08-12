const router = require("express").Router();

router.use('/getflights-json', require('./getflights-json'));
router.use('/getcodearea-json', require('./getcodearea-json'));
router.use('/getprice-json', require('./getprice-json'));
router.use('/resetpassword', require('./resetpassword'));
router.use('/postbooking-json', require('./postbooking-json'));
router.use('/getissued-json', require('./getissued-json'));
router.use('/getstatusbooking-json', require('./getstatusbooking-json'));

router.get('/', function(req, res) {

    console.log('username: ' +process.env.USER_NAME + process.env.PASS_WORD);
    res.status(200).json({error: 'read the documentation, you piece of shit!'})
})


module.exports = router