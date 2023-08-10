const axios = require('axios');
const assign = require('../helpers/formdata');
const router = require('express').Router()

const data = axios.create({
    baseURL: 'https://web.klikmbc.biz/json'
});

router.post('/', function(req, res) {
    const { to, from, date, adult, infant, child, flight, passengername, email } = req.body;

    const formData = assign({to, from, date, adult, infant, child, flight, passengername, email});

    data
        .post(`/postbooking-json`,formData)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            const {code, status} = error
            res.status(500).send({code, status});
        });
});

router.get('/', (req, res) => {
    res.send('No available route for postbooking-json');
})

module.exports = router;