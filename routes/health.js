const express = require('express');
const router = express.Router();
const health = require('../controller/health');

console.log("test enter route lunchbox.js");
router.get('/health', async (req, res) => {
    const email = req.query.email;
    
    const result = await health(email);
    console.log("backend result",result)
    if (result.error) {
        res.status(404).send('health get error.')
    }
    res.send(result.data);
})

module.exports = router;