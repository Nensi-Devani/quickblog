import express from 'express'
import 'dotenv/config'
import cors from 'cors'

const app = express()

// middlewares
app.use(cors())
app.use(express.json()) // all the requests will be pass using json method

// routes
app.get('/', (req,res)=>{ // in browser, localhost:3000
    res.send('API is working')
})

const PORT = process.env.PORT || 3000

// start the backend server 
app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})

export default app;