import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js'
import adminRouter from './routes/adminRoutes.js'

const app = express()
await connectDB() // connect database

// middlewares
app.use(cors())
app.use(express.json()) // all the requests will be pass using json method

// routes ::: 
app.get('/', (req,res)=>{ // in browser, localhost:3000
    res.send('API is working')
})
// admin routes
app.use('/api/admin', adminRouter)


const PORT = process.env.PORT || 3000

// start the backend server 
app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})

export default app;