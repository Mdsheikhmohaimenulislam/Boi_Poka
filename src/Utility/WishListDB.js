const getBookStoredWishList = () => {
    const bookStored = localStorage.getItem("wishList");

    if(bookStored){
        const storedData = JSON.parse(bookStored);
        return storedData;
    }
    else{
        return [];
    }
}


const addWishList =(id) => {
    const bookDataStored = getBookStoredWishList();
    if(bookDataStored.includes(id)){
        alert("already some one exist")
    }
    else{
        bookDataStored.push(id);
        const data = JSON.stringify(bookDataStored);
        localStorage.setItem("wishList" , data);
    }
}

// Incompled
const removeid = (id) => {
    const removeToStored = getBookStoredWishList()
    const remaining = removeToStored.filter(book => book.id !== id)
    localStorage.setItem("wishList" , remaining);
    console.log(id);
}









export {getBookStoredWishList,addWishList , removeid}; 