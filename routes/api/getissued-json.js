const router = require('express').Router();
const axios = require('axios');


const data = axios.create({
    baseURL: 'https://web.klikmbc.biz/json'
});


router.get('/', (req, res) => {
    res.send('No applicable GET method for getissued endpoint');
});

router.post('/getissued-json', (req,res) => {
    const {username, password, kodebooking} = req.query;

    if(!kodebooking){
        return res.status(403).json({
            message: 'Kode Booking tidak boleh kosong'
        })
    };

    data
        .post('/getissued-json', {
            usernamee,
            password,
            kodebooking
        })
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(err => {
            const {status, code} = err;

            res.status(500).send({status, code});
        });
});

module.exports = router;