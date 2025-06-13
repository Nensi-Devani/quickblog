import mongoose from "mongoose"

// create schema
const blogSchema = new mongoose.Schema({ 
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isPublished: {
        type: Boolean,
        required: true
    },
},{timestamps: true}) // date and time will be automatically store

const Blog = mongoose.model('blog',blogSchema)

export default Blog