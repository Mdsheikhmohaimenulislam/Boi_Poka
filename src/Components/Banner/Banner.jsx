import React from "react";

import BookImage from '../../assets/pngwing 1.png'

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen p-5">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
            <div>
            <img
            src={BookImage}
            className="max-w-sm rounded-lg shadow-2xl"
          />
            </div>
          <div>
            <h1 className="text-5xl font-bold mb-5">Books to freshen up your bookshelf</h1>
            <button className="btn btn-primary">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
