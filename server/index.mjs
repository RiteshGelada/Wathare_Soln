import express from 'express'
import http from 'http'
import * as socketio from 'socket.io'
const port = 4001;

const app = express()
const httpServer = http.createServer(app)


const server = new socketio.Server(httpServer, {
    cors:{
        origin:'*',
    }
})
let timechange
const data = [
    {name :1, X:Math.random()*10, y: Math.random()*10},
    {name :2, X:Math.random()*10, y: Math.random()*10},
    {name :3, X:Math.random()*10, y: Math.random()*10},
    {name :4, X:Math.random()*10, y: Math.random()*10},
    {name :5, X:Math.random()*10, y: Math.random()*10},
];
server.on("connection",(socket)=>{
    console.log("connected")
    if(timechange)clearInterval(timechange)

    if(data.length > 5){
        data.reverse().pop()
        data.reverse()
    }
    data.push({name :data[data.length-1].name+1, X: Math.random()*10, y: Math.random()*10 })
    setInterval(() => 
    socket.emit("message", data),1000);
})
// const httpServer = http.createServer(app)

httpServer.listen(port)

