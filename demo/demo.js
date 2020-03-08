let _= require('lodash')
//console.log(_.random(1,100));
let data=require('./demo.json');

console.log(data);
console.log(data.name)

let fs=require('fs');

fs.readFile('./demo.json','UTF-8',(err,data)=>
{
    let dataval=JSON.parse(data);
    console.log(dataval);
    console.log(dataval.name);
})

fs.writeFile('demowritefile',JSON.stringify(data),(err)=>
{
    console.log("writefinished",err);
})
