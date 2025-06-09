import { NavLink } from 'react-router-dom'
import image from '../assets/blog_pic_1.png'

const BlogCard = () => {
    const id = 1
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis ea explicabo impedit hic iusto aut aperiam eius maxime quasi."

  return (
    <NavLink to={`/blog/${id}`} className='w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer'>
      <img src={image} alt="blog image" className='aspect-video' />
      <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs'>
        Technology
      </span>
      <div className='p-5'>
        <h5 className='mb-2 font-medium text-gray-900'>Title of the blog</h5>
        <p className='mb-3 text-xs text-gray-600'> {description.slice(0,80)} </p>
      </div>
    </NavLink>
  )
}

export default BlogCard
