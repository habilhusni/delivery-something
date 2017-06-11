'use strict'
const express = require('express');
const router  = express.Router();
const Data    = require('../models/data.js');

let getData   = (req, res) => {
  Data.find(function (err, data) {
  		if (err) res.send(err);
  		res.send(data);
	});
}

let getOneData = (req, res) => {
	Data
  .findOne({_id: req.params.id})
	.exec((err, data) => {
		if (err) res.send(err);
		res.send(data);
	});
}

let createData = (req, res) => {
	let data = new Data(
		{
			place: req.body.place,
      longitude: req.body.longitude,
      latitude: req.body.latitude,
		});

	data.save(function (err) {
  	if (err) res.send(err);
	});

	res.send(data);
}

let delData = (req, res) => {
	Data.findByIdAndRemove(req.params.id, (err, data) => {
		if(err) {
			res.send(err.message);
		} else {
			res.send(data);
		}
	})
}

let updateData = (req, res) => {
	Data.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
		if(err) {
			res.send(err.message);
		} else {
			res.send('Succeed update');
		}
	})
};

module.exports = {
  getData,
  getOneData,
  createData,
  delData,
  updateData,
};
