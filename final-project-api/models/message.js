'use strict';
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
    text: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Message.belongsTo(models.User, {
          onDelete: 'CASCADE',
          foreignKey: {
            name: 'userId',
            allowNull: false
          }
        });
        Message.belongsTo(models.Room, {
          onDelete: 'CASCADE',
          foreignKey: {
            name: 'roomHash', 
            allowNull: false
          }
        });
      }
    }
  });
  return Message;
};