import Blog from '../models/Blog.js'
import Comment from '../models/Comment.js'

export const getAllBlogs = async (req, res) => {
    try{
        const blogs = await Blog.find({isPublished:true}) // return all the blogs with isPublished = true
        res.json({success: true, blogs:blogs})
    }catch(error){
        res.json({success: false, message:`Error in fetching the blogs = ${error.message}`})
    }
}

export const getBlogById = async (req, res) => {
    try{
        const {id} = req.params
        const blog = await Blog.findById(id)
        if(!blog)
            res.json({success: false, message:`Blog not found !`})
        res.json({success: true, blog})
    }catch(error){
        res.json({success: false, message:`Error in fetching the blog = ${error.message}`})
    }
}