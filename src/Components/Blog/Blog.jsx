import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {cover, title, img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className="w-full mb-8" src={cover} alt={`Cover of ${title}`} />
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img className="w-14 h-14 rounded-full" src={img} alt="" />
                    <div>
                        <h3 className="font-bold text-2xl">{author}</h3>
                        <p className="text-base text-[#11111199] font-semibold">{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p className="text-base text-[#11111199] font-semibold">{reading_time} min read</p>
                </div>
            </div>
            <h2 className="text-4xl font-bold mt-5 mb-3">{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, index) => <span key={index} className="text-base text-[#11111199] font-semibold"> {hashtag}</span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;