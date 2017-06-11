'use strict'
const express = require('express');
const router  = express.Router();
const control = require('../controller/dataController');

router.get('/', function(req, res) {
  res.send('This is from index');
});

router.get('/data',         control.getData);
router.get('/data/:id',     control.getOneData);
router.post('/data',        control.createData);
router.delete('/data/:id',  control.delData);
router.put('/data/:id',     control.updateData);

module.exports = router;
