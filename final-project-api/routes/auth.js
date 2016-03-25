var express = require('express');
var models = require('../models');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.post('/', function(req, res) {
  models.User.find({
    where: {token: req.body.token}
  })
  .then(function(user) {
    res.status(200).json({user: user.dataValues})
  })
  .catch(function(err) {
    models.User.findOne({
      where: {id: 1}
    })
    .then(function(user) {
      console.log(user)
      res.status(200).json({user: user.dataValues})
    })
    .catch(function(err) {
      res.status(500).json({err: err})
    });
  });
});

router.post('/fb', function(req, res) {
  console.log(req)
  models.User.findOrCreate({
    where: {fbId: req.body.fbId},
    defaults: {
      username: req.body.name,
      email: req.body.email,
      profilePicUrl: req.body.profilePicUrl,
      token: req.body.token
    }
  })
  .then(function(user) {
    res.status(200).json({token: user[0].dataValues.token});
  })
  .catch(function(error) {
    res.status(500).json(error);
  });
});

module.exports = router;