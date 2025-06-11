import { useEffect, useState } from "react"
import BlogTableItem from "../../components/admin/BlogTableItem"

const ListBlog = () => {
  const [blogs,setBlogs] = useState([])

  // const fetchBlogs = () => {
  //     setBlogs(blog_data)
  // }

  // useEffect(() => {
  //   fetchBlogs()
  // },[])

  return (
    <>
      <h1>All Blogs</h1> 
      <div className='relative h-4/5 mt-4 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-left text-gray-600 uppercase'>
            <tr>
              <th scope='col' className='px-2 py-4 xl:px-6'> # </th>
              <th scope='col' className='px-2 py-4'> Blog Title </th>
              <th scope='col' className='px-2 py-4 max-sm:hidden'> Date </th>
              <th scope='col' className='px-2 py-4 max-sm:hidden'> Status  </th>
              <th scope='col' className='px-2 py-4'> Actions </th>
            </tr>
          </thead>
          <tbody>
            <BlogTableItem />
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListBlog
