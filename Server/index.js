import express from 'express';
// import cors from "cors";
import bodyParser from "body-parser"; 

import connectDB from './database.js';
import userRouter from './Routes/userRoute.js';
import linkRouter from './Routes/linkRoute.js';
connectDB();

const app = express()
// app.use(cors());
app.use(bodyParser.json());
app.use('/users',userRouter );
app.use('/links',linkRouter );

const port = 3000;


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
