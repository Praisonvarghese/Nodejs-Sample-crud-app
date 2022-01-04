const express= require('express');
const app = express();
app.use(express.json());
const coursesController = require ('./courses');

app.use('/api',coursesController);

app.get('/',(req,res)=>{
   res.send('Hello Every One Welcome to Coding Concepts');
})

app.listen('3000');