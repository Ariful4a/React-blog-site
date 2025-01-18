import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog, handleAddToBookmark, handleReadingTime}) => {
    const {cover, title, img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className="w-full h-[650px] mb-8" src={cover} alt={`Cover of ${title}`} />
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img className="w-14 h-14 rounded-full" src={img} alt="" />
                    <div>
                        <h3 className="font-bold text-2xl">{author}</h3>
                        <p className="text-base text-[#11111199] font-semibold">{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <p className="text-base text-[#11111199] font-semibold">{reading_time} min read</p>
                    <button
                    onClick={() => handleAddToBookmark(blog)} className="text-base text-[#f20b0b99] font-semibold"><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mt-5 mb-3">{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, index) => <span key={index} className="text-base text-[#11111199] font-semibold"> {hashtag}</span>)
                }
            </p>
            <button onClick={() => handleReadingTime(reading_time)} className="text-base mt-2 underline text-[#f20b0b99] font-semibold">Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blog;