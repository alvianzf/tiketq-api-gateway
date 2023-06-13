const router = require("express").Router();

router.use('/getflights-json', require('./getflights-json'));
router.use('/getcodearea-json', require('./getcodearea-json'));
router.use('/getprice-json', require('./getprice-json'));

router.get('/', function(req, res) {
    res.status(200).json({error: 'read the documentation, you piece of shit!'})
})


module.exports = router