const DashboardCard = ({icon,data,title}) => {
  return (
    <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
        <img src={icon} alt="icon" />
        <div>
            <p className='text-xl font-semibold text-gray-600'>{data}</p>
            <p className='text-gray-400 font-light'>{title}</p>
        </div>
    </div>
  )
}

export default DashboardCard
