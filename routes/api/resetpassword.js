const router = require('express').Router();

const axios = require('axios');

const data = axios.create({
    baseURL: 'https://web.klikmbc.biz/json'
});

router.post('/', function(req, res) {
    const {username, email, phone, agencode, newpassword} = req.query;

    data
        .post('resetpassword', {
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
})

module.export = router;