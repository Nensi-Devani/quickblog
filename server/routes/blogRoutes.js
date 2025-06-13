import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlogById, togglePublish } from '../controllers/blogController.js'
import upload from '../middlewares/multer.js'
import auth from '../middlewares/auth.js'

const blogRouter = express.Router()

// upload.single = to uplaod a single image
// image = property name from frontend (as form field) / 
// uplaod = middleware for image upload
// auth = middleware for authorized user access
blogRouter.post('/', upload.single('image'), auth, createBlog) // url = /api/blog/
blogRouter.get('/', getAllBlogs) // url = /api/blog/
blogRouter.get('/:id', getBlogById) // url = /api/blog/blogId
blogRouter.delete('/:id',auth, deleteBlog) // url = /api/blog/blogId  & only admin can delete the blog
blogRouter.post('/toggle-publish',auth, togglePublish) // url = /api/blog/blogId

export default blogRouter