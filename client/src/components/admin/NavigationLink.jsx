import { NavLink } from "react-router-dom"

const NavigationLink = ({redirect, title, icon}) => {
  return (
    <>
      <NavLink to={redirect} end={true} className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && 'bg-primary/10 border-r-4 border-primary'} `}>
        <img src={icon} alt={title} className="min-w-4 w-5" />
        <p className="hidden md:inline-block">{title}</p>
      </NavLink>
    </>
  )
}

export default NavigationLink
