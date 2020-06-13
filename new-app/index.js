var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(3000,function (){
    console.log("sever gestartet");
});

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection',function (socket,name){

    console.log("new user");

socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
    socket.on('disconnect', () => {

    console.log('user disconnected');
  });

});
