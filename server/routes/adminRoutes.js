import express from 'express'
import { adminLogin, approveCommentById, createBlog, deleteBlog, deleteCommentById, getAllBlogs, getAllComments, getDashboardData, togglePublish } from '../controllers/adminController.js'
import auth from '../middlewares/auth.js'
import upload from '../middlewares/multer.js'

const adminRouter = express.Router()

adminRouter.post('/login', adminLogin)
adminRouter.get('/dashboard', auth, getDashboardData)

// upload.single = to uplaod a single image
// image = property name from frontend (as form field) / 
// uplaod = middleware for image upload
// auth = middleware for authorized user access
adminRouter.post('/blogs', upload.single('image'), auth, createBlog) // url = /api/admin/blogs
adminRouter.get('/blogs', auth,getAllBlogs)
adminRouter.delete('/blogs/:id',auth, deleteBlog)
adminRouter.patch('/blogs/toggle-publish/:id',auth, togglePublish)

adminRouter.get('/comments', auth, getAllComments)
adminRouter.delete('/comments/:id', auth, deleteCommentById)
adminRouter.patch('/comments/approve/:id', auth, approveCommentById)

export default adminRouter