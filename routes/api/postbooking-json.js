const axios = require('axios');
const router = require('express').Router()

const data = axios.create({
    baseURL: 'https://web.klikmbc.biz/json'
});

router.post('/', (req, res) => {
    const {username, password, flight, from, to, date, adult, child, infant, email, phone, passengername, dateofbirth, baggagevolume, passportnumber, passportexpired} = req.query;

    data.
        post('/postbooking-json', {
            username,
            password, 
            flight, 
            from, 
            to, 
            date, 
            adult: adult ?? 0, 
            child: child ?? 0, 
            infant: infant ?? 0, 
            email, 
            phone, 
            passengername, 
            dateofbirth,
            baggagevolume,
            passportnumber: passportnumber ?? null,
            passportexpired: passportexpired ?? null
        })
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(err => {
            const {status, code} = err;
            res.status(500).send({status, code});
        })

});

router.get('/', (req, res) => {
    res.send('No available route for postbooking-json');
})

module.exports = router;