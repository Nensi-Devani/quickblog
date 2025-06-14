import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blog',
        required: true
    },
    name: { // name of user who will comment
        type: String,
        required: true
    },
    content: { // name of user who will comment
        type: String,
        required: true
    },
    isApproved: { // name of user who will comment
        type: Boolean,
        default: false
    },
},{timestamps: true})

const Comment = mongoose.model('comment',commentSchema)

export default Comment