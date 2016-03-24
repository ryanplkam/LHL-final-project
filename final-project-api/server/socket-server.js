var io = require('socket.io');

module.exports = function(server) {
  var socketServer = io(server);

  socketServer.on('connection', function(socket) {
    
    socket.on('join room', function(room) {
      
      socket.join(room);

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