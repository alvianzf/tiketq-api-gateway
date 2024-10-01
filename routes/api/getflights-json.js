const router = require('express').Router();
const axios = require('axios');
const assign = require('../helpers/formdata');
const { sortDataByName } = require('../helpers/sorting');

const data = axios.create({
    baseURL: process.env.API_BASE_URL
});

router.post('/', function(req, res) {
    const { to, from, date } = req.body;

    const formData = assign({to, from, date});

    data
        .post(`/getflights-json`, formData)
        .then(response => {
            const { rc, msg, data } = response.data;
            if (rc === "00" && msg === "sukses" && Array.isArray(data)) {
                const sortedData = sortDataByName(data);
                res.send({ rc, msg, data: sortedData });
            } else {
                res.send(response.data);
            }
        })
        .catch(error => {
            const {code, status} = error
            res.status(500).send({code, status});
        });
});

module.exports = router;
