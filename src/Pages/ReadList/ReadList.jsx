import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook, removeOfReadList } from "../../Utility/AddToDB";
import FilterBook from "../FilterBook/FilterBook";
import { getBookStoredWishList } from "../../Utility/WishListDB";
import WishList from "../WishList/WishList";


const ReadList = () => {
      const [myReadList, setMyReadList] = useState([]);
      const [myWishList, setMyWishList] = useState([])
  
  // Data Load korci add id to id filter korci or id convert o korci number a
  const data = useLoaderData();

  // useEffect use kora
  useEffect(() => {
    const storedBookData = getStoreBook();
    const convertId = storedBookData.map((id) => parseInt(id));
    const readBookList = data?.filter((book) => convertId.includes(book.bookId));
    setMyReadList(readBookList);


  }, [data]);


  useEffect(() => {
    const storedData = getBookStoredWishList()
    const convertId = storedData.map((Id) => parseInt(Id));
    const wistListFilter = data.filter(book => convertId.includes(book.bookId));
    setMyWishList(wistListFilter)

  }, []);


  // readList remove 
const removeItems = (bookId) => {
  removeOfReadList(bookId)
  const restItems = myReadList.filter(readList => readList.bookId !== bookId)
  setMyReadList(restItems)
  console.log(restItems);
}


  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <div className="space-y-5 mb-60">
          {myReadList.map((markBooks,index) => (
            <FilterBook key={index} removeItems={removeItems} markBooks={markBooks} />
          ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="space-y-5 mb-30">
            {
              myWishList.map((bookWish , index) => <WishList key={index} bookWish={bookWish}></WishList>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
