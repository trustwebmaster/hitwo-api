const mongoose = require('mongoose');
const router = require('express').Router();

router.post('/newstore', (req, res) => {
	var {storename} = req.body;
});

module.exports = router;
