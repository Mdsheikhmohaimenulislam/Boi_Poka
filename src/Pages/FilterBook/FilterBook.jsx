
import { MdOutlineRequestPage } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { removeOfReadList } from "../../Utility/AddToDB";





const FilterBook = ({ markBooks,removeItems }) => {

    // || {} useing undefined na hoy jeno
  const {
    bookName,
    image,
    author,
    totalPages,
    rating,
    publisher,
    bookId,
    tags,
    yearOfPublishing,
  } = markBooks || {} ;

  





  return (
    <div>
      <div className="flex space-x-6  border-1 border-amber-800 rounded-xl p-5">
        <div>
          <img className="w-30 p-5 rounded-xl bg-gray-300" src={image} alt="" />
        </div>
        <div>
          <h1>{bookName}</h1>
          <p>By : {author}</p>
          <div>
            <p className="space-x-5 flex">
              <span>Tag</span>
              {tags.map((tag,index) => (
                <span key={index} tag={tag}>{tag}</span>
              ))}
              <span className="flex gap-1">
                <span>
                  <CiLocationOn size={20} />
                </span>
                Year of Publishing: {yearOfPublishing}
              </span>
            </p>
            <p></p>
          </div>
          <div className="flex space-x-8">
            <p>Publisher: {publisher}</p>
            <p className="flex">
              <span>
                <MdOutlineRequestPage size={20} />
              </span>
              Page {totalPages}
            </p>
          </div>
          <div>
            <p>Rating: {rating}</p>
            <button onClick={() => removeItems(bookId)} className="btn">Deleted</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBook;
