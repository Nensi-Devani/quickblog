import tick_icon from "../../assets/tick_icon.svg"
import bin_icon  from "../../assets/bin_icon.svg"
import { useAppContext } from "../../context/AppContext"
import toast from "react-hot-toast"

const CommentTableItem = ({comment, fetchComments}) => {
  const {axios} = useAppContext()

  const blog = comment.blog.title
  const {_id, name, content} = comment
  const BlogDate = new Date(comment.createdAt);

  const approveComment = async () => {
    try{
        const {data} = await axios.patch(`/api/admin/comments/approve/${_id}`)
        if(data.success){
            toast.success(data.message)
            await fetchComments()
        }
        else
            toast.error(data.message)
    }catch(error){
        toast.error(error.message)
    }
  }
  
  const deleteComment = async () => {
    const confirm = window.confirm('Are you sure you want to delete this comment ?')
    if(!confirm) return;
    try{
        const {data} = await axios.delete(`/api/admin/comments/${_id}`)
        if(data.success){
            toast.success(data.message)
            await fetchComments()
        }
        else
            toast.error(data.message)
    }catch(error){
        toast.error(error.message)
    }
  }

  return (
    <tr className="order-y border-gray-300">
        <td className="px-6 py-4">
            <b className="font-medium text-gray-600">Blog</b> : {blog}
            <br /> <br />
            <b className="font-medium text-gray-600">Name</b> : {name}
            <br />
            <b className="font-medium text-gray-600">Comment</b> : {content}
        </td>
        <td className="px-6 py-4 max-sm:hidden">
            {BlogDate.toDateString()}
        </td>
        <td className="px-6 py-4">
            <div className="inline-flex items-center gap-4">
                {!comment.isApproved ? 
                    <img onClick={approveComment} src={tick_icon} alt="" className="w-5 hover:scale-110 transition-all cursor-pointer"/> :
                    <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1 ">Approved</p>
                }
                <img onClick={deleteComment} src={bin_icon} alt="bin icon" className="w-5 hover:scale-110 transition-all cursor-pointer" />
            </div>
        </td>
    </tr>
  )
}

export default CommentTableItem
