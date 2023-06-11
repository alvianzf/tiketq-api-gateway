const router = require('express').Router();
const axios = require('axios');

const data = axios.create({
    baseURL: 'https://web.klikmbc.biz/json'
});

router.get('/', function(req, res) {
    const { username, password, to, from, date } = req.query;

    let missingParameter = "missing parameter: "
    if (!username) missingParameter.join(" username")
    if (!password) missingParameter.join(" password")
    if (!to) missingParameter.join(" to")
    if (!from) missingParameter.join(" from")
    if (!date) missingParameter.join(" date")

    if (!username || !password || !to || !from || !date) {
        return res.status(400).send({ missingParameter, error });
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
            res.status(500).send({ error });
        });
});

module.exports = router;
