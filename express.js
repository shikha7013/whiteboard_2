const express = require("express");
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log(socket.id)
    socket.on("send",function(message){
        console.log(message)
        socket.broadcast.emit("receivedmessage",message)
    })
});

app.use(express.static('client'))
server.listen(3000, function () {
    console.log("Server started at port 3000")
})