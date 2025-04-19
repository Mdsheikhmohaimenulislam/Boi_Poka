import React from "react";
// import { data } from 'react-router';
import Book from "../Book/Book";

const Books = ({ datas }) => {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl mt-30 mb-15">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-30">
        {datas.map((data) => (
          <Book key={data.bookId} data={data}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
