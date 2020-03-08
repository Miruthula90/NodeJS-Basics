fs=require('fs');
function phonenum(err,data)
{
    console.log('data:',data);
}

fs.readdir('C:/',phonenum);
console.log("this comes after")