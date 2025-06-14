import Comment from "../models/Comment.js"

export const createComment = async (req, res) => {
    try{
        const {blog, name, content} = req.body
        const comment = await Comment.create({blog, name, content})
        res.json({success: true, message:'Comment added successfully', comment})
    }catch(error){
        res.json({success: false, message:`Error in adding the comment = ${error.message}`})
    }
}

export const getCommentsByBlogId = async (req, res) => {
    try{
        const {blogId} = req.params
        const comments = await Comment.find({blog:blogId, isApproved:true}).sort({createdAt: -1})
        res.json({success: true,comments})
    }catch(error){
        res.json({success: false, message:`Error in fetching the comments = ${error.message}`})
    }
}