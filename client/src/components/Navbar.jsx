import logo from '../assets/logo.svg'
import arrow from '../assets/arrow.svg'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
  const {token} = useAppContext()
  
  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      <NavLink to={'/'}> <img src={logo} alt="logo" /> </NavLink>
      <NavLink to={'/admin/'} className='flex items-center gap-2 rounded-full text-sm cursor-pointer   bg-primary text-white px-5 sm:px-10 py-2.5'>
        { token ? "Dashboard" : "Login"}
        <img src={arrow} alt="arrow" className='w-3' />
      </NavLink>
    </div>
  )
}

export default Navbar
