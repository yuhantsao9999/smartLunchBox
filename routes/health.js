const express = require('express');
const router = express.Router();
const health = require('../controller/health');

router.get('/health', async (req, res) => {
    const userid = req.query.userid;
    const result = await health(userid);
    if (result.error) {
        res.status(404).send('health get error.');
    }
    res.send(result.data);
});

module.exports = router;
