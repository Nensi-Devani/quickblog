import express from 'express'
import { createComment, getCommentsByBlogId } from '../controllers/commentController.js'

const commentRouter = express.Router()

commentRouter.post('/', createComment) // all the users can add comment
commentRouter.get('/:blogId', getCommentsByBlogId)

export default commentRouter