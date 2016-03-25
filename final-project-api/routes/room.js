var express = require('express');
var models = require('../models');
var router = express.Router();

router.post('/', function(req, res) {
  models.Room.findOrCreate({
    where: {hash: req.body.roomHash},
    defaults: {userId: req.body.userId}
  })
  .then(function(room) {
    res.status(200).json(room);
  })
  .catch(function(error) {
    res.status(500).json(error);
  });
});

module.exports = router;