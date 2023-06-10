const router = require('express').Router();
const axios = require('axios');

const data = axios.create({
    baseURL: 'https://web.klikmbc.biz/json'
});

router.get('/', function(req, res) {
    const { username, password, to, from, date } = req.query;

    if (!username || !password || !to || !from || !date) {
        return res.status(400).send({ error: 'Missing parameters' });
    }

    axios
        .post(`searchflights-json`, {
            username,
            password,
            to,
            from,
            date
        })
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            res.status(500).send({ error: 'Internal Server Error' });
        });
});

module.exports = router;
