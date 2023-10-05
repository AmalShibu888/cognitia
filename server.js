const express = require('express');
const mongoose = require('mongoose')

const event = require('./models/EventModel.js')
const app = express();

mongoose.connect('mongodb+srv://codingclub:1234@cluster0.1aknvis.mongodb.net/?retryWrites=true&w=majority')
.then((data) =>{
    app.listen(3000 , ()=>{
        console.log('listening...')
    })
})

app.post('/api/addData' , async (req,res) =>{
    console.log(req.body);
    try{
        const eventObj = await event.create(req.body);
        res.status(200).json(eventObj);
    }catch (error){
        res.status(400).json({error : error.message})
    }
    
})



