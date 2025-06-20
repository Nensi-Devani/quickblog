import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL; // backend url

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [token, setToken] = useState(null) 
  const [blogs, setBlogs] = useState([]) // store all the blog data
  const [input, setInput] = useState("") // filter the blogs

  const fetchAllBlogs = async () => {
    try{
      const {data} = await axios.get('/api/blog/') // fetch all the published blogs
      data.success ? setBlogs(data.blogs) : toast.error(data.message)
      // console.log(data)
    }catch(error){
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllBlogs()
    const token = localStorage.getItem('token')
    if(token){
      setToken(token)
      axios.defaults.headers.common['Authorization'] = token //  token added in all the api call when ever the token is available  
    }
  },[])

  const value = {
    axios, token, setToken, blogs, setBlogs, input, setInput
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

// Note : when ever we want to use the data from the context we simply call this function() & we will get the data from context file
export const useAppContext = () => {
  return useContext(AppContext)
}

export default AppProvider
