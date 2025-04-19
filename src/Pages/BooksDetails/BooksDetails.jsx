import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utility/AddToDB";
import { addWishList } from "../../Utility/WishListDB";

const handleMarkAsRead = (id) => {

    addToStoredDB(id)
}


const handleWishList = (id) => {
 addWishList(id)
}



const BooksDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const convertId = parseInt(id);

  const singleBook = data?.find((book) => book.bookId === convertId);
  

  const {image, bookName,author, category, review, tags, yearOfPublishing,publisher,totalPages,rating} = singleBook || {}

  return (
    <div className="flex space-x-10">
      <div className="w-2/6 p-10 bg-gray-200 mt-30 mb-30 rounded-xl ">
        <img className="rounded-xl" src={image} alt="" />
      </div>
      <div className="w-3/6  mt-30 mb-30 rounded-xl ">
        <h1 className="text-3xl font-extrabold">{bookName}</h1>
        <p className="font-extrabold text-gray-500">By : {author}</p>
        <p className="border-1 text-gray-300 mt-3 mb-3 border-dotted w-lg"></p>
        <p className="text-gray-700 text-xl">{category}</p>
        <p className="border-1 text-gray-300 mt-3 mb-3 border-dotted w-lg"></p>
        <p className="w-120"><span className="text-sm font-bold">Review : </span><span className="text-gray-500 ">{review}</span></p>
        <div className="mt-5 flex space-x-20"> 
        <span className="mt-2 font-bold">Tag</span>
        {
            tags.map((tag,index) => <p key={index} tag={tag} className=" bg-gray-200 p-2 rounded-xl text-green-500 font-extrabold "> #{tag}</p>)
        }
        </div>
        <p className="border-1 text-gray-300 mt-8 mb-8 border-dotted w-lg "></p>
       <table className="table-auto">
        <tbody>
            <tr className="">
                <td className="text-gray-500 font-extrabold">Number of Pages:</td>
                <td className="pl-5 text-black font-extrabold">{totalPages}</td>                               
            </tr>

            <tr>
            <td className="text-gray-500 font-extrabold">Publisher:</td>
            <td className="pl-5 text-black font-extrabold">{publisher}</td>
            </tr>

            <tr>
            <td className="text-gray-500 font-extrabold">Year of Publishing:</td>
            <td className="pl-5 text-black font-extrabold">{yearOfPublishing}</td>
            </tr>

            <tr>
            <td className="text-gray-500 font-extrabold">Rating:</td>
            <td className="pl-5 text-black font-extrabold">{rating}</td>
            </tr>
        </tbody>
       </table>
       <div className="flex gap-10 mt-6">
       <button onClick={() => handleMarkAsRead(id)} className="btn">Mark as Read</button>
       <button onClick={() => handleWishList(id)} className="btn bg-blue-400 text-white">Add To Wishlist</button>
       </div>
      </div>
    </div>
  );
};

export default BooksDetails;
