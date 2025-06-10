import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import gradientBg from '../assets/gradientBackground.png'
import Moment from "moment"
import image from '../assets/blog_pic_1.png'
import user_icon from '../assets/user_icon.svg'
import facebook_icon from '../assets/facebook_icon.svg'
import twitter_icon from '../assets/twitter_icon.svg'
import googleplus_icon from '../assets/googleplus_icon.svg'
import Loader from "../components/Loader"

const Blog = () => {
  const {id} = useParams()
  const [data, setData] = useState('demo data')
  const [comments, setComments] = useState(['demo'])
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  // const fetchBlogData = async () => {
  //   const data = blog_data.find(item => item.id == id)
  //   setData(data)
  // }
  // const fetchComments = async () => {
  //   setComments(data)
  // }

const addComment = (e) => {
  e.preventDefault()
}

  // useEffect(() => {
  //   fetchBlogData()
  //   fetchComments()
  // },[])

  return data ? (
    <div className="relative">
      <img src={gradientBg} alt="gradient background" className='absolute -top-50 -z-1 opacity-50' /> {/* background image */}

      <Navbar /> {/* navbar */}

      <div className="text-center mt-20 text-gray-600">
        <p className="text-primary py-4 font-medium">Published on {Moment('2025-04-21T07:06:37.508Z').format('MMMM Do YYYY')}</p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800">Title of Blog</h1>
        <h2 className="my-5 max-w-lg mx-auto">Sub title of blog here ...</h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">Nensi Devani</p>
      </div>

      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={image} alt="blog image" className="rounded-3xl mb-5" />

        {/* blog description */}
        <div className="rich-text max-w-3xl">
          {/* blog description will be displyed here */}
        </div>

        {/* comment */}
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Comments (5)</p>
          <div className="flex flex-col gap-4">
              {/* comments will be displyed here */}
              <div className="relative bg-primary/2 border border-primary/5 max-w-xl rounded text-gray-600 p-2">
                <div className="flex items-center gap-2 mb-2">
                  <img src={user_icon} alt="user icon" className="w-6" />
                  <p className="font-medium">User Name</p>
                </div>
                <p className="text-sm max-w-md ml-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aperiam.</p>
                <div className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">{Moment('2025-04-21T07:06:37.508Z').fromNow()}</div>
              </div>
          </div>
        </div>

        {/* add comment */}
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Add Your Comment</p>
          <form onSubmit={addComment} className="flex flex-col items-start gap-4 max-w-lg">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)} 
              value={name} 
              placeholder="Name" 
              required 
              className="w-full p-2 border border-gray-300 rounded outline-none"
            />
            <textarea 
              placeholder="Comment" 
              onChange={(e) => setContent(e.target.value)} 
              value={content} 
              className="w-full p-2 border border-gray-300 rounded outline-none h-48" 
              required>
            </textarea>
            <button type="submit" className="bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer">Submit</button>
          </form>
        </div>

        {/* share btns */}
        <div className="my-24 max-w-3xl mx-auto">
          <p className="font-semibold my-4">Share is article on social media</p>
          <div className="flex">
            <img src={facebook_icon} width={50} alt="facebook icon" />
            <img src={twitter_icon} width={50} alt="twitter icon" />
            <img src={googleplus_icon} width={50} alt="google icon" />
          </div>
        </div>

      </div>

      <Footer /> {/* footer */}

    </div>
  ) : <Loader />
}

export default Blog
