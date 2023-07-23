const router = require('express').Router();
const axios = require('axios');
const assign = require('../helpers/formdata');

const data = axios.create({
    baseURL: 'https://web.klikmbc.biz/json'
});

router.post('/', function(req, res) {
    const { to, from, date, adult, infant, child } = req.query;

    let missingParameter = "missing parameter: "
    if (!to) missingParameter += " to;"
    if (!from) missingParameter += " from;"
    if (!date) missingParameter += " date;"

    if ( !to || !from || !date) {
        return res.status(400).send({ error: missingParameter});
    }

    const formData = assign({to, from, date, adult, infant, child});


    data
        .post(`/getprice-json`,formData)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            const {code, status} = error
            res.status(500).send({code, status});
        });
});




module.exports = router;
