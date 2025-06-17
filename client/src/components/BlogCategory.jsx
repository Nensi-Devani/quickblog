import { useState } from "react"
import { motion } from "motion/react"
import BlogCard from "./BlogCard"
import { useAppContext } from "../context/AppContext"

const BlogCategory = () => {
    const {blogs, input} = useAppContext()
    const blogCategories = ['All', 'Technology', 'Startup', 'Lifestyle', 'Finance']
    const [menu, setMenu] = useState('All')

    const filteredBlogs = () => {
        if(input === '' || input === ' '){
            return blogs
        }
        // filter blogs by name or category
        return blogs.filter((blog) => blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
    }
    
  return (
    <>
        <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
            {blogCategories.map((category) => (
                <div key={category} className="relative"> 
                    <button onClick={() => setMenu(category)} className={`cursor-pointer text-gray-500 ${menu === category && 'text-white px-4 pt-0.5'}`}>
                        {category} 
                        {menu === category && (
                            <motion.div layoutId="underline"
                            /* for animation */
                            transition={{type:'spring', stiffness:500, damping:30 }}  className="absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full"></motion.div>
                        )}
                    </button>
                </div>
            ))}
        </div> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
            {/* Blog cards */}
            {filteredBlogs()
                .filter((blog) => menu === 'All' ? true : blog.category === menu) // filters blogs, which category matches menu
                .map((blog) => <BlogCard key={blog._id} blog={blog} /> ) // 
            }
        </div>
    </>
  )
}

export default BlogCategory
