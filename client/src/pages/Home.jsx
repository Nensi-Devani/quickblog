import BlogCategory from "../components/BlogCategory"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BlogCategory /> {/* blog-cards all called in this component */}
      <NewsLetter />
    </>
  )
}

export default Home
