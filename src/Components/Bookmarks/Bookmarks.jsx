import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3">
            <div className="bg-slate-100 p-4 border border-purple-600 rounded-xl">
                <h2 className="text-center text-blue-600 text-2xl font-bold">Spent time on read : {readingTime} min</h2>
            </div>
            <div className="bg-slate-100 h-full rounded-xl">
                <h2 className="pl-4 pt-4 mt-4 text-2xl font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}
export default Bookmarks;