import { createContext, useContext, useState } from "react"
import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL; // backend url

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [token, setToken] = useState(null) 
  const [blogs, setBlogs] = useState([]) // store all the blog data
  const [input, setInput] = useState("") // filter the blogs

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
