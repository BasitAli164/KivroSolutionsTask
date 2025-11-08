import dotenv from 'dotenv'
import databaseConnection from './src/DB/local.db'
import app from './app';
dotenv.config()


const port=process.env.PORT || 4000;

databaseConnection()
.then(()=>{
    app.listen(port,()=>{
        console.log(object)
    })
})