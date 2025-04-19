import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import BooksDetails from "../Pages/BooksDetails/BooksDetails";
import ReadList from "../Pages/ReadList/ReadList";
import WishList from "../Pages/WishList/WishList";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,
    children:[
      {
        index: true,
        path: "/",
        loader: () => fetch("/booksData.json"),
        Component: Home,
      },

      { path: "/readList",
        loader: () => fetch("/booksData.json"),
         Component: ReadList 
      },
      {path:"/wishList", loader:() => fetch("/booksData.json") ,Component:WishList},
      { path:"/BooksDetails/:id" ,
        loader: () => fetch("./booksData.json"),
         Component:BooksDetails },
    ],
  },
]);
