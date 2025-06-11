import cross_icon from '../../assets/cross_icon.svg'

const BlogTableItem = () => {
    const blog = {
        isPublished: true
    }
  return (
    <tr className="border-y border-gray-300">
        <th className="px-2 py-4">1</th>
        <td className="px-2 py-4">Title of blog</td>
        <td className="px-2 py-4 max-sm:hidden">2025-05-15</td>
        <td className="px-2 py-4 max-sm:hidden">
            <p className={`${blog.isPublished ? 'text-green-600' : 'text-orange-700'}`}>
                {blog.isPublished ? 'Published' : 'Unpublished'}
            </p>
        </td>
        <td className="px-w py-4 flex text-xs gap-3">
            <button className="border px-2 py-0.5 mt-1 rounded cursor-pointer">
                {blog.isPublished ? 'Published' : 'Unpublished'}
            </button>
            <img src={cross_icon} alt="cross icon" className='w-8 hover:scale-110 transition-all cursor-pointer' />
        </td>
    </tr>
  )
}

export default BlogTableItem
