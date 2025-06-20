import { useEffect, useRef, useState } from 'react'
import upload from '../../assets/upload_area.svg'
import Quill from 'quill'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AddBlog = () => {
  const {axios} = useAppContext()
  const [isAdding, setIsAdding] = useState(false)

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const categories = ['Startup', 'Technology', 'Lifestyle', 'Finance'];
  const [image,setImage] = useState(false)
  const [title,setTitle] = useState('')
  const [subTitle,setSubTitle] = useState('')
  const [category,setCategory] = useState('')
  const [isPublished,setIsPublished] = useState(false)

  const generateContent = () => {

  }

  const handleSubmit = async (e) => {
    e.preventDefault()  
    try{
      setIsAdding(true)

      const blog = {
        title, subTitle,
        description: quillRef.current.root.innerHTML,
        category, isPublished
      }
      const formData = new FormData()
      formData.append('blog',JSON.stringify(blog))
      formData.append('image',image)

      const {data} = await axios.post('/api/admin/blogs', formData)
      if(data.success){
        toast.success(data.message)
        setImage(false)
        setTitle('')
        setSubTitle('')
        setCategory('')
        quillRef.current.root.innerHTML = ''
      }
      else
        toast.error(data.message)
    }catch(error){
      toast.error(error.message)
    }finally{
      setIsAdding(false)
    }
  }

  useEffect(()=>{
      // Initiate quill
      if(!quillRef.current && editorRef.current){
        quillRef.current = new Quill(editorRef.current, {theme:'snow'})
      }
  },[])

  return (
    <>
      <form onSubmit={handleSubmit} className="flex-1 text-gray-600 h-full overflow-scroll">
        <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">

          <p>Upload Thumbnail</p>
          <label htmlFor="image">
            <img src={!image ? upload : URL.createObjectURL(image)} alt="upload" className='mt-2 h-16 rounded cursor-pointer' />
            <input onChange={(e) => setImage(e.target.files[0]) } type="file" id='image' className='opacity-0' />
          </label>

          <p className='mt-4'>Blog Title</p>
          <input 
            type="text"
            placeholder='Type Here' 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className='w-full max-w-lg bg mt-2 p-2 border border-gray-300 outline-none rounded'
          />

          <p className='mt-4'>Sub Title</p>
          <input 
            type="text"
            placeholder='Type Here' 
            onChange={(e) => setSubTitle(e.target.value)}
            value={subTitle}
            className='w-full max-w-lg bg mt-2 p-2 border border-gray-300 outline-none rounded'
          />

          <p className='mt-4'>Blog Description</p>
          <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
            <div ref={editorRef}></div>
            <button type='button' onClick={generateContent} className='absolute bottom-1 right-2 ml-2 text-xs bg-black/70 text-white px-4 py-1.5 rounded hover:underline cursor-pointer'>
              Generate with AI
            </button>
          </div>

          <p className='mt-4'>Blog Category</p>
          <select onChange={(e) => setCategory(e.target.value)} name="category" className='mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded'>
            <option value="">Select Category</option>
            {/* blogcategories will displayed here */}
            { categories.map((item, index) => (
              <option key={index} value={item}> {item} </option>
            ))}
          </select>

          <div className='flex gap-2 mt-4'>
            <p>Publish Now</p>
            <input 
              type="checkbox" 
              checked={isPublished} 
              onChange={(e) => setIsPublished(e.target.checked)}
              className='scale-125 cursor-pointer' 
            />
          </div>

          <button type="submit" disabled={isAdding} className='mt-8 h-10 w-40 bg-primary text-white rounded cursor-pointer text-sm'>
            {isAdding ? 'Adding...' : 'Add Blog'}
          </button>

        </div>
      </form> 
    </>
  )
}

export default AddBlog
