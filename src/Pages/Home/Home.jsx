import React from "react";
import Banner from "../../Components/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {

    const datas = useLoaderData();
  

  return (
    <div>
        <Banner></Banner>
        <Books datas={datas}> </Books>
    </div>
  );
};

export default Home;
