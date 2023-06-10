const router = require('express').Router();
const axios = require('axios');

const data = axios.create({
    baseURL: 'http://klikmbc.co.id/json'
});

router.get('/', (req, res) => {
    data.get('getcodearea-json')
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            res.status(500).send({ error: 'Internal Server Error' });
        });
});

module.exports = router;
