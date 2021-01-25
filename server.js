import createGame from './public/game.js'

import express from 'express'
import http from 'http'
import {Server} from 'socket.io'

const app = express()
const server = http.createServer(app)
const sockets = new Server(server)

app.use(express.static('public'))

const game = createGame()

game.subscribe((command) => {
    console.log(`>> Emiting ${command.type}`)
    sockets.emit(command.type, command)
})

sockets.on('connection', (socket) => {
    const userId = socket.id
    console.log(`>> User connected on Server with id: ${userId}.`)

    game.addUser(userId)

    socket.emit('setup', game.state)

    socket.on('disconnect', () => {
        console.log(`>> User disconnected: ${userId}`)     
        game.removeUser(userId)
    })

    socket.on('move-bar', (command) => {
        game.moveBar(command)
    })
})

server.listen(3000, () => {
    console.log(`>> Server listening on port: 3000.`)
})