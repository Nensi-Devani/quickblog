import jwt from 'jsonwebtoken'
import Blog from '../models/Blog.js'
import Comment from '../models/Comment.js'
import fs from 'fs'
import imagekit from '../config/imageKit.js'

export const adminLogin = async (req, res) => {
    try{
        const {email, password} = req.body
        // if email or password wrong
        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD)
            return res.json({success: false, message:'Invalid Credentials'})
        // if email and password matches
        const token = jwt.sign({email}, process.env.JWT_SECRET) // generate the token
        return res.json({success: true, token})
    }catch(error){
        res.json({success: false, message: error.message})
    }
}

// get data for cards
export const getDashboardData = async (req, res) => {
    try{
        const recentBlogs = await Blog.find({}).sort({createdAt: -1}).limit(5)
        const blogs = await Blog.countDocuments()
        const comments = await Comment.countDocuments()
        const drafts = await Blog.countDocuments({isPublished: false})

        const dashboardData = {
            recentBlogs, blogs, comments, drafts
        }
        res.json({success: true, dashboardData})
    }catch(error){
        res.json({success: false, message: error.message})
    }
}

export const createBlog = async (req, res) => {
    try{
        // if isPublished is not given then default = false 
        const {title, subTitle, description, category, isPublished = false} = JSON.parse(req.body.blog) // we will get in form of string
        const imageFile = req.file

        // Check if all fields are filled
        if(!title || !subTitle || !description || !category || !imageFile)
            return res.JSON({success: false, message: 'All the fields are required'})

        // if all fields are filled
        const fileBuffer = fs.readFileSync(imageFile.path)
        // upload image on imageKit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            useUniqueFileName: true,
            folder: '/blogs'
        })
        // optimization through imagekit URL transformation
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'}, // auto compression
                {format: 'webp'},  // conver to modern format
                {width: '1280'},   // width resizing
            ]
        })
        const image = optimizedImageUrl; // image url

        // store the data in mongodb
        const blog = await Blog.create({title, subTitle, description, category, image, isPublished})
        res.json({success: true, message:'Blog added successfully',blog})
    }catch(error){
        res.json({success: false, message:`Error in adding the blog = ${error.message}`})
    }
}

export const getAllBlogs = async (req, res) => {
    try{
        const blogs = await Blog.find({}).sort({createdAt: -1})
        res.json({success: true, blogs})
    }catch(error){
        res.json({success: false, message:`Error in fetching the blogs = ${error.message}`})
    }
}

export const deleteBlog = async (req, res) => {
    try{
        const {id} = req.params
        const blog = await Blog.findByIdAndDelete(id)
        const comments = await Comment.deleteMany({blog: id}) // delete comments for the deleted blog
        if(!blog)
            res.json({success: false, message:`Blog Not Found !`})
        res.json({success: true,message:`Blog deleted successfully`})
    }catch(error){
        res.json({success: false, message:`Error in fetching the blog = ${error.message}`})
    }
}

export const togglePublish = async (req, res) => {
    try{
        const {id} = req.params
        const blog = await Blog.findById(id)
        if(!blog)
            res.json({success: false, message:`Blog Not Found !`})
        blog.isPublished = !blog.isPublished
        await blog.save() // update the blog
        res.json({success: true,message:`Blog status updated successfully`})
    }catch(error){
        res.json({success: false, message:`Error in updating the blog status = ${error.message}`})
    }
}

export const getAllComments = async (req, res) => {
    try{
        const comments = await Comment.find({}).populate("blog").sort({createdAt: -1}) // populate = get blog data as well
        res.json({success: true, comments})
    }catch(error){
        res.json({success: false, message:`Error in fetching the comments = ${error.message}`})
    }
}

export const deleteCommentById = async (req,res) => {
    try{
        const {id} = req.params
        const comment = await Comment.findByIdAndDelete(id)
        if(!comment)
            res.json({success: false, message:`Comment Not Found !`})
        res.json({success: true, message:`Comment deleted successfully`})
    }catch(error){
        res.json({success: false, message:`Error in deleting comment = ${error.message}`})
    }
}

export const approveCommentById = async (req,res) => {
    try{
        const {id} = req.params
        const comment = await Comment.findByIdAndUpdate(id, {isApproved: true})
         if(!comment)
            res.json({success: false, message:`Comment Not Found !`})
        res.json({success: true, message:`Comment approved successfully`})
    }catch(error){
        res.json({success: false, message:`Error in approving comment = ${error.message}`})
    }
}