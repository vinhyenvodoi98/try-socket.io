var express = require('express');
var socket = require('socket.io');

//app setup
var app = express();
var server= app.listen(3000,()=>{
    console.log('hello');
})


// static file 
app.use(express.static('public'));

app.get('/index',(req,res)=>{
    res.send('hello');
})

//socket setup
var io = socket(server);

io.on('connection',(socket)=>{
    console.log('connect sucess' , socket.id);

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    });
})