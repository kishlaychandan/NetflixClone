import  express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import databaseConnection from './utils/database.js'
import cookieParser from 'cookie-parser'
import userRoute from './routes/userRoutes.js'
dotenv.config()

databaseConnection();
const app = express() 
const port = process.env.PORT || 8080
const corsOptions={
    origin:['http://localhost:5173','https://netflix-clone-gamma-smoky.vercel.app'],
    credentials:true,
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.json({message:"hello world"})
})
app.use('/api/v1/user',userRoute)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})