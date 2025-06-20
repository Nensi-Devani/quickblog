import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import Sidebar from '../../components/admin/Sidebar'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {
    const {axios, setToken} = useAppContext()

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token')
        axios.defaults.headers.common['Authorization'] = null
        setToken(null)
        navigate('/')
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
            <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default Layout
