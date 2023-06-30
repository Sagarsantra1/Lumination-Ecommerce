import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";

function ProductDetials() {
  let [Index, setIndex] = useState(0);
  const [product, setproduct] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const getData = async () => {
      const quary = `*[_type == "product"&&slug.current == "${slug}"]`;
      const productData = await client.fetch(quary);
      setproduct(productData[0]);
    };
    getData();
  }, [slug]);

  const { image, name, price, details } = product;
  const { incQty, decQty, onAdd, qty, buyNow } = useStateContext();

  return (
    <div className="w-full px-5 md:px-18 py-5 flex items-center justify-center flex-wrap">
      <div className="flex items-center justify-center flex-col md:w-1/2 w-full h-fit p5 md:pr-10">
        <div className="flex items-center justify-center">
          {image && image[0] && (
            <img
              alt={`product image ${Index}`}
              className="w-full overflow-hidden lg:h-96 h-64 object-cover object-center rounded-xl"
              src={urlFor(image[Index])}
            />
          )}
        </div>
        <div className="flex items-center justify-center ">
          {image?.map((image, index) => {
            return (
              <img
                key={index}
                alt={`product image ${index}`}
                className={`w-20 h-20 m-2 object-cover object-center rounded-xl border-2 ${
                  index == Index ? "border-black" : ""
                }`}
                src={urlFor(image)}
                onMouseEnter={() => {
                  setIndex(index);
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <h2 className="text-sm text-gray-500 mb-2">Lumination</h2>
        <h1 className="text-gray-900 text-3xl font-medium mb-1">{name}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </span>
        </div>
        <span className="title-font font-medium text-2xl text-gray-900">
          {price}
        </span>
        <p className="text-sm text-gray-500 mb-2">
          Tax included. Shiping calculated at chack out
        </p>
        <div className="flex flex-col mt-6 items-start pb-5 border-b-2 border-gray-100 mb-5">
          <span className="text-sm text-gray-500 mb-2">Quantity</span>
          <div className="flex border-2 border-black rounded-lg w-32">
            <button
              className="flex items-center justify-center text-black border-0 p-2 w-1/3 text-xl hover:bg-black hover:text-white"
              onClick={decQty}
            >
              -
            </button>
            <div className="flex items-center justify-center text-black border-0 p-2 w-1/3">
              {qty}
            </div>
            <button
              className="flex items-center justify-center text-black border-0 text-xl p-2 w-1/3 hover:bg-black hover:text-white"
              onClick={incQty}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex">
          <button
            className="flex items-center justify-center w-1/3 text-black  border border-black py-2 px-6 m-2 focus:outline-none hover:bg-black hover:text-white rounded-lg"
            onClick={() => onAdd(product, qty)}
          >
            Add to Bag
          </button>
          <button
            className="flex items-center justify-center w-1/3 text-black  border border-black py-2 px-6 m-2 focus:outline-none hover:bg-black hover:text-white rounded-lg"
            onClick={buyNow}
          >
            Buy now
          </button>
        </div>
        <p className="leading-relaxed my-10">{details}</p>
      </div>
    </div>
  );
}

export default ProductDetials;
