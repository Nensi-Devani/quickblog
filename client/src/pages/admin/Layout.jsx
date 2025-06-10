import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import Sidebar from '../../components/admin/Sidebar'

const Layout = () => {
    const logout = () => {
        useNavigate('/')
    }
  return (
    <>
        <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
            <NavLink to={'/'}><img src={logo} alt="" className='w-32 sm:w-40 cursor-pointer'/></NavLink>
            <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>
                Logout 
            </button>
        </div> 

        <div className='flex h-[calc(100vh-70px)]'>
            <Sidebar />                
            <Outlet />
        </div>
    </>
  )
}

export default Layout
