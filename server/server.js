import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js'
import adminRouter from './routes/adminRoutes.js'
import blogRouter from './routes/blogRoutes.js'
import commentRouter from './routes/commentRoutes.js'

const app = express()
await connectDB() // connect database

// vercel deployment solution
const corsConfig = {
    origin: "*",
    credential: true,
    methods: ['GET', 'POST', 'PUT', 'PETCH', 'DELETE']
}
app.options("", cors(corsConfig))

// middlewares
app.use(cors(corsConfig))
app.use(express.json()) // all the requests will be pass using json method

// routes ::: 
app.get('/', (req,res)=>{ // in browser, localhost:3000
    res.send('API is working')
})
// admin route
app.use('/api/admin', adminRouter)
// blog route
app.use('/api/blog', blogRouter)
// comment route
app.use('/api/comment', commentRouter)


const PORT = process.env.PORT || 3000

// start the backend server 
app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})

export default app;