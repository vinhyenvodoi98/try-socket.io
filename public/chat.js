//make connection

var socket = io.connect("http://localhost:3000");

//Query DOM
var message=document.getElementById('message');
    output=document.getElementById('output');
    btn=document.getElementById('send');

//emit event

btn.addEventListener('click',()=>[
    socket.emit('chat',{
        message: message.value,
    })
]);

//listen for event

socket.on('chat',(data)=>{
    output.innerHTML+='<p>'+data.message+'</p>';
})