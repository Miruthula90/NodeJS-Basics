var socket=io.connect('http://localhost:3000');


$(()=>
{
    $("#send").click(()=>
    {
        console.log("hi from click");
        //addMessage({name:"Tim",message:"Hello world"})
        var message={name:$("#name").val(),message:$("#message").val()};
        postMessages(message);
    })
    
    getMessages();
})

socket.on('message',addMessage)

function addMessage(message)
{
    $("#messages").append(`<h4>${message.name}<h4><p>${message.message}</p>`)
}

function getMessages()
{
    $.get("http://localhost:3000/messages",(data)=>
    {
         console.log(data);
         data.forEach(element => {
             addMessage(element);
         });
    })
}

function postMessages(message)
{
    $.post("http://localhost:3000/messages",message);
}

// function postMessages(message)
// {
//     $.post("http://localhost:3000/messages",message,(data)=>
//     {
//          console.log(data);
//          data.forEach(element => {
//              addMessage(element);
//          });
//     })
// }