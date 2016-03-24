'use strict';
module.exports = function(sequelize, DataTypes) {
  var Room = sequelize.define('Room', {
    hash: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING,
    protected: DataTypes.BOOLEAN,
    extended: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Room.belongsTo(models.User, {
          onDelete: 'CASCADE',
          foreignKey: {
            name: 'userId', 
            allowNull: false
          }
        });
        Room.hasMany(models.Message, {
          foreignKey: 'roomHash'
        });
      }
    }
  });
  return Room;
};