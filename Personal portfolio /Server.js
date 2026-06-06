const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI);

const Contact = mongoose.model('Contact',{
    name:String,
    email:String,
    message:String
});

const Project = mongoose.model('Project',{
    name:String,
    description:String
});

app.get('/projects', async(req,res)=>{
    const projects = await Project.find();
    res.json(projects);
});

app.post('/contact', async(req,res)=>{

    const contact = new Contact(req.body);

    await contact.save();

    res.json({
        message:"Saved Successfully"
    });
});

app.listen(3000,()=>{
    console.log("Server Running");
});
