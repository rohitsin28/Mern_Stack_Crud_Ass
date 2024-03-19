import express from 'express';
import mongoose from 'mongoose';
import route from './router.js';
import cors from 'cors';

const app = express();
const connect = async () =>{
    try {
        await mongoose.connect("mongodb+srv://rohitsin28:rohit2523@cluster0.tadvmkc.mongodb.net/WTI");
        console.log('DataBase connected')
    } catch (error) {
        throw error
    }
}

app.use(cors())
app.use(express.json())
app.use('/api/router/',route);

app.use((err,req,resp,next)=>{
    const errorStatus = err.status || 500 ;
    const errMessage = err.message || 'Something Went Wrong';
    return resp.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errMessage,
        stack: err.stack
    })
})

app.listen(3001,()=>{
    console.log('Server connected');
    connect();
})