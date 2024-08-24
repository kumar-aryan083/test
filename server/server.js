import express from 'express';
import mongoose from 'mongoose';
import adminRouter from './routers/admin.router.js';
import userRouter from './routers/user.router.js';
import env from 'dotenv';
import chalk from 'chalk';

env.config();
const app = express();
const dbConnection = ()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log(chalk.inverse.green("DB connected successfully."))
    }).catch((err)=>{
        console.log(chalk.inverse.red(err))
    })
}

app.use(express.json());
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);

app.listen(process.env.PORT, (err)=>{
    if(!err){
        dbConnection();
        console.log(chalk.inverse.yellow(`Server is live at port ${process.env.PORT}`));
    }
});