import { RxCross1 } from "react-icons/rx";
import { urlFor } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";

function BagProductCard({ item: { _id, image, name, price, quantity } }) {
  const { changeCartProductQuantity, removeCartProducr } = useStateContext();
  return (
    <div className="h-fit w-full flex items-center justify-start text-left p-2 relative">
      <img
        alt="item"
        className=" rounded-lg w-28 h-28 object-cover object-center mr-4"
        src={urlFor(image && image[0])}
      />
      <div className="">
        <h3 className="text-gray-500 text-xs">Lumination</h3>
        <h2 className=" font-medium text-sm text-gray-900">{name}</h2>
        <span className=" font-medium text-sm text-gray-900">${price}</span>
        <div className="flex flex-col mt-2 items-start border-b-2 mb-2">
          <div className="flex border overflow-hidden border-black rounded-lg w-20">
            <button
              className="flex items-center justify-center text-black border-0  w-1/3 text-xl hover:bg-black hover:text-white"
              onClick={() => changeCartProductQuantity(_id, "dec")}
            >
              -
            </button>
            <div className="flex items-center justify-center text-black border-0 w-1/3">
              {quantity}
            </div>
            <button
              className="flex items-center justify-center text-black border-0 text-xl  w-1/3 hover:bg-black hover:text-white"
              onClick={() => changeCartProductQuantity(_id, "inc")}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 right-0 hover:bg-gray-300 h-7 w-7 rounded-full flex items-center justify-center"
        onClick={() => removeCartProducr(_id)}
      >
        <RxCross1 />
      </div>
    </div>
  );
}

export default BagProductCard;
