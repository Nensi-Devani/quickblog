import tick_icon from "../../assets/tick_icon.svg"
import bin_icon  from "../../assets/bin_icon.svg"

const CommentTableItem = () => {
  return (
    <tr className="order-y border-gray-300">
        <td className="px-6 py-4">
            <b className="font-medium text-gray-600">Blog</b> : Blog Title
            <br /> <br />
            <b className="font-medium text-gray-600">Name</b> : Comment Name
            <br />
            <b className="font-medium text-gray-600">Comment</b> : Comment Content
        </td>
        <td className="px-6 py-4 max-sm:hidden">
            2025-05-15
        </td>
        <td className="px-6 py-4">
            <div className="inline-flex items-center gap-4">
                {!Comment.isApproved ? 
                    <img src={tick_icon} alt="" className="w-5 hover:scale-110 transition-all cursor-pointer"/> :
                    <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1 ">Approved</p>
                }
                <img src={bin_icon} alt="bin icon" className="w-5 hover:scale-110 transition-all cursor-pointer" />
            </div>
        </td>
    </tr>
  )
}

export default CommentTableItem
