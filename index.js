//1. Import packages

import express from 'express';

import http from 'http';

import { Server } from 'socket.io';



//2. create Instances & Make Server

const app = express();
const server = http.createServer(app);
const io = new Server(server);



//3. server static Files

app.use(express.static('public'));

//5. create connection

io.on('connection', (socket) => {
    console.log('User Connected Successfully')


    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })

    socket.on('disconnect', () => {
        console.log('User Disconnected')
    })
})



//6. Run server

server.listen(3030, () => console.log(`listen on: 3030`))
