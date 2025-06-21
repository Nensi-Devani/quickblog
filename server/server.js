import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js'
import adminRouter from './routes/adminRoutes.js'
import blogRouter from './routes/blogRoutes.js'
import commentRouter from './routes/commentRoutes.js'

const app = express()
await connectDB() // connect database

// middlewares
app.use(cors())
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
// app.listen(PORT, ()=>{
//     console.log('Server is running on port ' + PORT)
// })

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Vercel Serverless Express!' });
});

export default app;