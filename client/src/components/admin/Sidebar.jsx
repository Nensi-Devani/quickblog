import dashboard_icon from '../../assets/home_icon.svg'
import add_icon from '../../assets/add_icon.svg'
import list_icon from '../../assets/list_icon.svg'
import comment_icon from '../../assets/comment_icon.svg'
import NavigationLink from "./NavigationLink"

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r border-gray-200 min-h-full pt-6">
      <NavigationLink redirect='/admin/' title='Dashboard' icon={dashboard_icon} />
      <NavigationLink redirect='/admin/addBlog' title='Add blog' icon={add_icon} />
      <NavigationLink redirect='/admin/listBlog' title='Blog lists' icon={list_icon} />
      <NavigationLink redirect='/admin/comments' title='Comments' icon={comment_icon} />
    </div>
  )
}

export default Sidebar
