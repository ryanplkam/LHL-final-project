'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profilePicUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Room, {
          foreignKey: 'userId'
        });
        User.hasMany(models.Message, {
          foreignKey: 'userId'
        });
        User.hasMany(models.Friend, {
          foreignKey: 'userId'
        });
        User.belongsToMany(User, { 
          as: 'Friends', 
          through: 'Friends', 
          foreignKey: 'userId', 
          otherKey: 'friendId'
        });
      }
    }
  });
  return User;
};