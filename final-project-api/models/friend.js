'use strict';
module.exports = function(sequelize, DataTypes) {
  var Friend = sequelize.define('Friend', {
    // properties go here
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Friend;
};