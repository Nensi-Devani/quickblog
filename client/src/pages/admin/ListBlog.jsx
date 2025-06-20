import { useEffect, useState } from "react"
import BlogTableItem from "../../components/admin/BlogTableItem"
import { useAppContext } from '../../context/AppContext'
import toast from "react-hot-toast"

const ListBlog = () => {
  const {axios} = useAppContext()
  const [blogs,setBlogs] = useState([])

  const fetchAllBlogs = async () => {
    try{
      const {data} = await axios.get('/api/admin/blogs')
      data.success ? setBlogs(data.blogs) : toast.error(data.message)
    }catch(error){
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllBlogs()
  },[])

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

            {blogs.map((blog, index) => (
              <BlogTableItem key={blog._id} blog={blog} fetchAllBlogs={fetchAllBlogs} index={index+1} />
            ))}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListBlog
