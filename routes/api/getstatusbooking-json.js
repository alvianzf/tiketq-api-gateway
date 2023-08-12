const router = require('express').Router();
const axios = require('axios');
const assign = require('../helpers/formdata');


const data = axios.create({
    baseURL: 'https://web.klikmbc.biz/json'
});


router.get('/', (req, res) => {
    res.send('No applicable GET method for get status booking endpoint');
});

router.post('/', (req,res) => {
    const {kodebooking} = req.body;

    if(!kodebooking){
        return res.status(403).json({
            message: 'Kode Booking tidak boleh kosong'
        })
    };

    const formData = assign(kodebooking)

    data
        .post('/getstatusbooking-json', formData)
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(err => {
            const {status, code} = err;

            res.status(500).send({status, code});
        });
});

module.exports = router;