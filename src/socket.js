const { Server } = require('socket.io');
const indexCtrl = require('./controllers/index.controllers')

let socket;

const connection = server => {
    const io = new Server(server);
    let array = [];
    io.on('connection', newSocket => {
        console.log(newSocket.id);

        io.emit('array', array);
        console.log(array);

        newSocket.on('data', data => {
            array.push(data);
            io.emit('data', data);
        })
        newSocket.on('delete', data => {
            let filter = array.filter(el => el.name != data)
            io.emit('delete', filter)

            array = filter
        })
    })
};

const getSocket = () => socket;

module.exports = { connection, getSocket };