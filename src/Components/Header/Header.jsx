import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  const Link = (
    <>
      <ul className="space-x-8 md:flex lg:flex">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/readList"}>Listed Books</NavLink>
        <NavLink to={"/Pages to Read"}>Pages to Read</NavLink>
      </ul>
    </>
  );

  return (
    <div>
      <nav className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Link}
            </ul>
          </div>
          <p className="btn  text-xl">Boi Poka</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Link}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn">Sign In</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
