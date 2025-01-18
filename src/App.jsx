
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);


  const handleReadingTime = (time) => {
    setReadingTime(readingTime + time);

    // remove the read blog from bookmark 
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.reading_time !== time);
    setBookmarks(remainingBookmarks);
  }

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex gap-8 max-w-6xl mx-auto">
      <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
