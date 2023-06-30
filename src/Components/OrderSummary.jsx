import { useStateContext } from "../../context/StateContext";

function OrderSummary() {
  const { totalPrice, buyNow } = useStateContext();
  const shipingCharge = 8;

  return (
    <div className="flex justify-center items-center flex-col p-2 w-full">
      <h3 className="text-lg w-full text-center md:text-left font-semibold text-black">
        Summary
      </h3>
      <div className="flex justify-between items-center w-full space-y-4 flex-col border-gray-200 pb-4">
        <div className="flex justify-between w-full">
          <p className="text-base text-gray-800">Subtotal</p>
          <p className="text-base text-gray-600">${totalPrice}</p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-base text-gray-800">
            Discount
            <span className="bg-gray-200 p-1 text-xs font-medium text-gray-800">
              NA
            </span>
          </p>
          <p className="text-base text-gray-600">-$00.00 (00%)</p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p className="text-base text-gray-800">Shipping</p>
          <p className="text-base  text-gray-600">${shipingCharge}</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <p className="text-base font-semibold text-gray-800">Total</p>
        <p className="text-base font-semibold text-gray-600">
          ${totalPrice + shipingCharge}
        </p>
      </div>
      <button className="flex items-center justify-center w-1/2 text-black  border border-black py-2 m-2 focus:outline-none hover:bg-black hover:text-white rounded-lg"
      onClick={buyNow}
      >
        Chackout
      </button>
    </div>
  );
}

export default OrderSummary;
