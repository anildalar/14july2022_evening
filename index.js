//const something = require(somelibary);
const express = require('express');

const app = express();

const PORT = 4000;

//Lets create a Home Route   hostname:port/routename

app.get('/',(req,res)=>{
    console.log(req);
    res.json({
        'msg':"Hi Anjali how are you ?"
    });
});

app.get('/api/student',function(req,res){
    console.log(req.query);
    const name = req.query.name;
    const surname = req.query.surname
    const address = req.query.address
    const mob = req.query.mob
    res.json({name,surname,address,mob});
});

app.get('/api/teachers/:teacherName',(req,res)=>{
    //console.log(req.params.teacherName);
    const teacherName = req.params.teacherName;
    res.json({
        'msg':`hi ${teacherName}`
    });
});

app.listen(PORT,()=>{
    console.log(`The server is running on port `+PORT);
});