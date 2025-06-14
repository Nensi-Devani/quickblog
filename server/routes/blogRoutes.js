import express from 'express'
import { getAllBlogs, getBlogById} from '../controllers/blogController.js'

const blogRouter = express.Router()

blogRouter.get('/', getAllBlogs) // url = /api/blog/
blogRouter.get('/:id', getBlogById) // url = /api/blog/blogId

export default blogRouter