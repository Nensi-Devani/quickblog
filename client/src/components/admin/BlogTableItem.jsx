import toast from 'react-hot-toast';
import cross_icon from '../../assets/cross_icon.svg'
import { useAppContext } from '../../context/AppContext';

const BlogTableItem = ({ blog, fetchAllBlogs, index}) => {
    const {axios} = useAppContext()

    const id = blog._id;
    const {title, createdAt} = blog;
    const BlogDate = new Date(createdAt);

    const deleteBlog = async () => {
        const confirm = window.confirm('Are you sure you want to delete this blog ?')
        if(!confirm) return;
        try{
            const {data} = await axios.delete(`api/admin/blogs/${id}`)
            data.success ? toast.success(data.message) : toast.error(data.message)
            await fetchAllBlogs()
        }catch(error){
            toast.error(error.message)
        }
    }

    const togglePublish = async () => {
        try{
            const {data} = await axios.patch(`/api/admin/blogs/toggle-publish/${id}`)
            data.success ? toast.success(data.message) : toast.error(data.message)
            await fetchAllBlogs()
        }catch(error){
            toast.error(error.message)
        }
    }

  return (
    <tr className="border-y border-gray-300">
        <th className="px-2 py-4"> {index} </th>
        <td className="px-2 py-4"> {title} </td>
        <td className="px-2 py-4 max-sm:hidden"> {BlogDate.toDateString()} </td>
        <td className="px-2 py-4 max-sm:hidden">
            <p className={`${blog.isPublished ? 'text-green-600' : 'text-orange-700'}`}>
                {blog.isPublished ? 'Published' : 'Unpublished'}
            </p>
        </td>
        <td className="px-w py-4 flex text-xs gap-3">
            <button onClick={togglePublish} className="border px-2 py-0.5 mt-1 rounded cursor-pointer w-18">
                {blog.isPublished ? 'Unpublish' : 'Publish'}
            </button>
            <img onClick={deleteBlog} src={cross_icon} alt="cross icon" className='w-8 hover:scale-110 transition-all cursor-pointer' />
        </td>
    </tr>
  )
}

export default BlogTableItem
