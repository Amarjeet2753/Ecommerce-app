import express from 'express'
import morgan from 'morgan';
import dotenv from 'dotenv'
import connectDB from './config/db.js';

import authRoutes from './routes/authRoute.js';


dotenv.config()

// rest object
const app= express();

// dbconfig

connectDB();

// middleware
app.use(express.json());
app.use(morgan('dev'))


// Routes

app.use('/api/v1/auth',authRoutes);


// API--

app.get('/',(req,res)=>{

    res.send({
        msg :" welcome to ecommerce"
    })
})

const PORT =process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})