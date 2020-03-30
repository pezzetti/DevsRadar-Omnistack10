const socketio = require('socket.io')
const parseStringAsArray = require('./utils/str2array');
const calculateDistance = require('./utils/calculateDistance');
const connections = [];
let io;

exports.setupWebsocket = (server) => {    
    io = socketio(server);

    io.on('connection', socket => {
        console.log(socket.id);
        const {latitude, longitude, techs} = socket.handshake.query;
        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringAsArray(techs)
        })
    });
};

exports.findConnections = (coordinates, techs) => {
    return connections.filter( conn => {
        return calculateDistance(coordinates, conn.coordinates) < 10 
            && conn.techs.some(item => techs.includes(item))
    });
};

exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
      io.to(connection.id).emit(message, data);
    })
  }