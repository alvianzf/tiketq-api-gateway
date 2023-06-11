const router = require('express').Router();
const axios = require('axios');

const data = axios.create({
    baseURL: 'https://web.klikmbc.biz/json'
});

router.get('/', (req, res) => {
    data.get('getcodearea-json')
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            res.status(500).send({ error });
        });
});

module.exports = router;
