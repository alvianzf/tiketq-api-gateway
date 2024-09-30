const router = require('express').Router();
const axios = require('axios');

const data = axios.create({
    baseURL: process.env.API_BASE_URL
});

router.get('/', (req, res) => {
    data.get('getcodeflights-json')
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            res.status(500).send({ error });
        });
});

module.exports = router;
