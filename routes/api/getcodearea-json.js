const express = require('express');
const axios = require('axios');
const router = express.Router();
const assign = require('../helpers/formdata');

const API_BASE_URL = process.env.API_BASE_URL;

const apiClient = axios.create({
    baseURL: API_BASE_URL
});

async function getCodeArea(req, res) {
    try {
        const formData = assign({});
        const response = await apiClient.post('getcodearea-json', formData, {
            headers: formData.getHeaders()
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching code area:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

router.get('/', getCodeArea);

module.exports = router;
