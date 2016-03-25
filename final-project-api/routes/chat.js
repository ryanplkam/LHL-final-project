var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET messages. */
router.get('/:roomHash', function(req, res) {
  models.Room.findOne({
    where: {hash: req.params.roomHash},
    include: [{
      model: models.Message,
      include: [{
        model: models.User,
        attributes: ['username']
      }]
    }]
  })
  .then(function(room) {
    console.log(req)
    res.status(200).json(room.Messages);
  })
  .catch(function(error) {
    res.status(500).json(error);
  });
});

router.post('/', function(req, res) {
  models.Message.create({
    userId: req.body.userId,
    roomHash: req.body.roomHash,
    text: req.body.text
  })
  .then(function(message) {
    models.Message.findOne({
      where: {id: message.id},
      include: [{
        model: models.User,
        attributes: ['username']
      }]
    })
    .then(function(message) {
      res.status(200).json(message);
    })
  })
  .catch(function(error) {
    res.status(500).json(error);
  });
});

module.exports = router;
