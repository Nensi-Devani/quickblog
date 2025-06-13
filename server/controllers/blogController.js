import fs from 'fs'
import imagekit from '../config/imageKit.js'
import Blog from '../models/Blog.js'

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
        res.json({success: true, message:'Blog added successbully', blog:blog})
    }catch(error){
        res.json({success: false, message:`Error in adding the blog = ${error.message}`})
    }
}