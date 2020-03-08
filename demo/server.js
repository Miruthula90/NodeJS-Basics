var express=require('express');
var cors=require('cors');
var bodyParser=require('body-parser');
var app=express();
var http=require('http').Server(app);
var io=require('socket.io')(http);


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors);


var messages=[{name:"tim",message:"hi"},{name:"jane",message:"hello"}]

app.get('/messages',(req,res)=>
{
    res.send(messages);
})

app.post('/messages',(req,res)=>
{
    console.log(req.body)
    io.emit('message',req.body);
    messages.push(req.body);
    res.sendStatus(200);
})
io.on('connection',(socket)=>
{
    
    console.log("a user has logged in")
})
var server=http.listen(3000,()=>
{
    console.log(`server is listening to port ${server.address().port}`)
})