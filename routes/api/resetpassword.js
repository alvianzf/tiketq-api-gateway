const router = require('express').Router();
const axios = require('axios');

const data = axios.create({
    baseURL: 'https://web.klikmbc.biz/json'
});

router.get('/', function(req, res) {
    res.send('No workable get methods');
});

router.post('/', function(req, res) {
    const {username, email, phone, agencode, newpassword} = req.body;

    data
        .post('/resetpassword', {
            username,
            email,
            phone,
            agencode,
            newpassword
        })
        .then((response) => {
            res.send(response.data)
        })
        .catch(err => {
            const {code, status} = err;

            res.status(500).send({code, status});
        })
});

module.exports = router;