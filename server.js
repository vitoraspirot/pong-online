import createGame from './public/game.js'

import express from 'express'
import http from 'http'
import {Server} from 'socket.io'

const app = express()
const server = http.createServer(app)
const sockets = new Server(server)

app.use(express.static('public'))

sockets.on('connection', (socket) => {
    const userId = socket.id
    console.log(`>> User connected on Server with id: ${userId}`)
})

server.listen(3000, () => {
    console.log(`>> Server listening on port: 3000.`)
})