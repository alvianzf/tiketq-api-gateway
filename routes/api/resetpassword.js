const router = require('express').Router();
const axios = require('axios');
const FormData = require('form-data');
const assign = require('../helpers/formdata');

const data = axios.create({
    baseURL: 'https://web.klikmbc.biz/json'
});

router.get('/', function(req, res) {
    res.send('No workable get methods');
});

router.post('/', function(req, res) {
    const {username, email, phone, agencode, newpassword} = req.body;

   const bodyFormData = assign(email, phone, agencode, newpassword);

    data({
        method:'POST',
        url: '/resetpassword',
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
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