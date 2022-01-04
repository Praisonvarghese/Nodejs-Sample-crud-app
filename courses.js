const express= require('express');
const route=express.Router();

const courses=[
    {id:1,name:'Java'},
    {id:2,name:'NodeJs'},
    {id:3,name:'Python'},
    {id:4,name:'Angular'},
    {id:5,name:'Docker'}
 ]

route.get('/courses',(req,res)=>{
   res.send(courses);
})

route.get('/courses/:id',(req,res)=>{
   let course=courses.find(c=>c.id=== parseInt(req.params.id))
   if(!course) res.status(400).send('No Course found for the id : '+req.params.id);
   res.send(course);
})

route.post('/courses',(req,res)=>{
   let course = {
      id : courses.length + 1,
      name : req.body.name
   }
   courses.push(course);
   res.send(course);
})

route.put('/courses/:id',(req,res)=>{
   let course=courses.find(c=>c.id=== parseInt(req.params.id))
   if(!course) res.status(400).send('No Course found for the id : '+req.params.id);
   course.name=req.body.name;
   res.send(course);
})

route.delete('/courses/:id',(req,res)=>{
   let course=courses.find(c=>c.id=== parseInt(req.params.id))
   if(!course) res.status(400).send('No Course found for the id : '+req.params.id);
   const index = courses.indexOf(course);
   courses.splice(index,1);
   res.send(course);
})

module.exports=route;
