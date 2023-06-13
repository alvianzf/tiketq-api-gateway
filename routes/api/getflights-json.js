const router = require('express').Router();
const axios = require('axios');

const data = axios.create({
    baseURL: 'https://web.klikmbc.biz/json'
});

router.post('/', function(req, res) {
    const { username, password, to, from, date } = req.query;

    let missingParameter = "missing parameter: "
    if (!username) missingParameter += " username;"
    if (!password) missingParameter += " password;"
    if (!to) missingParameter += " to;"
    if (!from) missingParameter += " from;"
    if (!date) missingParameter += " date;"

    if (!username || !password || !to || !from || !date) {
        return res.status(400).send({ error: missingParameter});
    }

    data
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
            const {code, status} = error
            res.status(500).send({code, status});
        });
});

module.exports = router;
