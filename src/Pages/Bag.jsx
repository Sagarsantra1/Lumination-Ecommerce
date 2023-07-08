import BagProductCard from "../Components/BagProductCard";
import OrderSummary from "../Components/OrderSummary";
import { useStateContext } from "../../context/StateContext";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";

function Bag() {
  const { cartItem } = useStateContext();

  return (
    <div className="flex flex-wrap justify-center items-center p-10 min-h-screen">
      {cartItem.length >= 1 && (
        <>
          <div className=" w-full md:w-2/4 h-fit border-r border-gray-300 pr-10">
            {cartItem?.map((item) => {
              return <BagProductCard key={item._id} item={item} />;
            })}
          </div>
          <div className=" w-full md:w-1/4">
            <OrderSummary />
          </div>
        </>
      )}
      {cartItem.length < 1 && (
        <div className="text-center flex items-center justify-center flex-col space-y-5 h-full">
          <BsHandbag size={150} />
          <span>Your shoping bag is empty</span>
          <Link to="/Product">
            <button className="w-full text-black  border border-black py-2 px-6 my-5 focus:outline-none hover:bg-black hover:text-white rounded-lg">
              Continue shoping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Bag;
