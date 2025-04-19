import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ data }) => {
  const { image, bookName, author, totalPages, rating, category, tags , bookId} = data;

  return (
    <div>
      <Link to={`/BooksDetails/${bookId}`}>
        <div className="card bg-base-200 border-1 border-gray-300  shadow-xl">
          <figure className=" bg-base-300 rounded-xl mt-5 m-5">
            <img className="w-50 p-5" src={image} alt="Book" />
          </figure>
          <div className="card-body">
            <div className="flex justify-around mb-5">
              {tags.map((tag , index) => (
                <button tag={tag} key={index} className="text-blue-600">
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary ">{totalPages}</div>
            </h2>

            <div className="border-1 border-dotted text-gray-300"></div>

            <p className="text-sm font-semibold mt-1">BY : {author}</p>
            <div className="card-actions mt-1">
              <p>{category}</p>
              <p className="flex gap-2 align-center font-bold justify-end">
                {rating} <FaStarHalfAlt className="text-orange-400 mt-1" />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
