var io = require('socket.io');
var models = require('../models');

module.exports = function(server) {
  var socketServer = io(server);

  socketServer.on('connection', function(socket) { 
    socket.on('join room', function(room) {
      socket.join(room);

      // socket.to(room).broadcast.emit('user joined', {

      // });
      // socket.to(room).emit('user joined', {

      // });

      socket.on('new message', function(message) {
        // we tell the client to execute 'new message'  
        socket.to(room).broadcast.emit('new message', {
          id: message.id,
          user: message.user,
          text: message.text
        });
        // want the client to recieve message too
        socket.to(room).emit('new message', {
          id: message.id,
          user: message.user,
          text: message.text
        });
      });
  
    });

  });
}