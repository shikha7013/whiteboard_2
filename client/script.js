//alert('I am from express server');

const socket = io.connect('http://localhost:3000')
const input=document.getElementById("input")
const button=document.querySelector(".button")
const ul=document.querySelector(".chat-list")
button.addEventListener("click",function(){
    const data=input.value;
    if(data==""){
        return;
    }
    const li=document.createElement("li")
    li.innerHTML=`You: ${data}`
    li.style.listStyle="none"
    ul.appendChild(li)
    input.value=""
    socket.emit("send",`sender: ${data}`)
})
socket.on("receivedmessage",function(message){
    alert(message)
})