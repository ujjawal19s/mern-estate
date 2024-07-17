import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.MONGO);

mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.log(err);
    });

const app = express();

app.listen(4500, ()=>{
    console.log("Server is running on port 4500")
});

