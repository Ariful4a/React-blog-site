
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'

function App() {

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-6xl mx-auto">
      <Blogs></Blogs>
      <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
