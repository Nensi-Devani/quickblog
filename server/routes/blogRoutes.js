import express from 'express'
import { createBlog } from '../controllers/blogController.js'
import upload from '../middlewares/multer.js'
import auth from '../middlewares/auth.js'

const blogRouter = express.Router()

// upload.single = to uplaod a single image
// image = property name from frontend (as form field) / 
// uplaod = middleware for image upload
// auth = middleware for authorized user access
blogRouter.post('/', upload.single('image'), auth, createBlog) // url = /api/blog/

export default blogRouter