import socketio from 'socket.io-client';
import { IP_HOST } from 'react-native-dotenv';

const socket = socketio(`http://${IP_HOST}:3333`, {
    autoConnect: false
});

function subscribeToNewDevs(subscribreFn) {
    socket.on('new-dev', subscribreFn);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = { latitude, longitude, techs };
    socket.connect();    
}

function disconnect() {
    if(socket.connected) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs
};