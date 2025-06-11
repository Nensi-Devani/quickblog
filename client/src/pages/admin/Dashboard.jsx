import { useEffect, useState } from 'react'
import icon1 from '../../assets/dashboard_icon_1.svg'
import icon2 from '../../assets/dashboard_icon_2.svg'
import icon3 from '../../assets/dashboard_icon_3.svg'
import icon4 from '../../assets/dashboard_icon_4.svg'
import DashboardCard from '../../components/admin/DashboardCard'
import BlogTableItem from '../../components/admin/BlogTableItem'

const Dashboard = () => {
  const [dashboardData,setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  })

  // const fetchDashboard = async () => {
  //   setDashboardData(dashboard_data)
  // }

  // useEffect(()=> {
  //   fetchDashboard()
  // },[])


  return (
    <>
      <div className="flex flex-wrap gap-4">
        {/* cards */}
        <DashboardCard icon={icon1} data={dashboardData.blogs} title={'Blogs'} />
        <DashboardCard icon={icon2} data={dashboardData.comments} title={'Comments'} />
        <DashboardCard icon={icon3} data={dashboardData.drafts} title={'Drafts'} />
      </div>

        {/* recent blogs */}
      <div>
        <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
          <img src={icon4} alt="icon" />
          <p>Latest Blogs</p>
        </div>
        <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
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
      </div>
    </>
  )
}

export default Dashboard
