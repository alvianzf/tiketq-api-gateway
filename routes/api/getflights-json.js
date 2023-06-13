const router = require('express').Router();
const axios = require('axios');

const data = axios.create({
    baseURL: 'https://web.klikmbc.biz/json'
});

router.get('/', function(req, res) {
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
            res.status(500).send({code: error.code, status: error.status});
        });
});

module.exports = router;
