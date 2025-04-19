

const WishList = ({bookWish}) => {


const {image} = bookWish || {}

  return(
    <div>
        <div className="border-2 border-amber-900 w-1/6">
        <img className="w-50 p-8" src={image} alt="" />
        </div>
    </div>
  );
};

export default WishList;
