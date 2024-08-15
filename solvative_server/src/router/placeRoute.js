const express = require('express');
const axios = require('axios');
const router = express.Router();
router.get('/', async (req, res) => {
 const RAPID_API_API=process.env.RAPID_API_API
 const RAPID_API_HOST=process.env.RAPID_API_HOST
const RAPID_API_KEY=process.env.RAPID_API_KEY
  try {
    console.log({RAPID_API_API });
    const { query, limit } = req.query;
    const response = await axios.get(RAPID_API_API, {
      params: {namePrefix: query, limit },
      headers: {
        'x-rapidapi-key': RAPID_API_KEY,
        'x-rapidapi-host': RAPID_API_HOST,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching places:', error.message);
    res.status(500).json({ error: 'Failed to fetch places' });
  }
});

module.exports = router;
