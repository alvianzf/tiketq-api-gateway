const router = require('express').Router();
const axios = require('axios');

const data = axios.create({
    baseURL: 'https://web.klikmbc.biz/json'
});

router.post('/', function(req, res) {
    const { username, password, to, from, date, adult, infant, child } = req.query;

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
        .post(`/getprice-json`, {
            username,
            password,
            to,
            from,
            date,
            adult: adult ?? 0,
            child: child ?? 0,
            infant: infant ?? 0
        })
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            const {code, status} = error
            res.status(500).send({error});
        });
});

module.exports = router;
