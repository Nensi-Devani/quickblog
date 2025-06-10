import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/5">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">

        <div>
          <img src={logo} alt="logo" className='w-32 sm:w-44' />
          <p className='max-w-[410px] mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure iste expedita eius est impedit quas laudantium exercitationem error.</p>
        </div>

        <div className='flex flex-wrap justify-end w-full md:w-[45%] gap-5'>
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">FaceBook</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>

      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">Copyright 2025 © QuickBlog - All Right Reserved.</p>
    </div>
  )
}

export default Footer
