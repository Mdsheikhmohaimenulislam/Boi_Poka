const getStoreBook = () => {
    const storedBook = localStorage.getItem("readList");

    if(storedBook){
        const storedBookData = JSON.parse(storedBook);
        return storedBookData;
    }
    else{
        return [];
    }
}


const addToStoredDB = (id) => {
    const storedBookData = getStoreBook();

    if(storedBookData.includes(id)){
        alert("id  already exist ")
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList" , data)
    }
}



// compted
const removeOfReadList = (id) => {
    const removeToStored = getStoreBook()
    const remaining = removeToStored.filter(book => parseInt(book) !==id)
    localStorage.setItem("readList" , JSON.stringify(remaining));

}




export {addToStoredDB , getStoreBook,removeOfReadList} ;