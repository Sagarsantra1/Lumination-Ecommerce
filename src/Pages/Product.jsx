import ProductCard from "../Components/ProductCard";
import React, { useState, useEffect } from "react";
import { client } from "../../lib/client";
import { BsChevronDown, BsSearch } from "react-icons/bs";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [serchToggle, setSerchToggle] = useState(false);
  const [find, setFind] = useState("");
  const [sortOption, setSortOption] = useState("Relevent");

  useEffect(() => {
    const getData = async () => {
      try {
        const query = `*[_type == "product"]`;
        const productData = await client.fetch(query);
        setProducts(productData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    getData();
  }, []);

  const toggleSearch = () => {
    setSerchToggle(!serchToggle);
  };

  const handleSearch = (event) => {
    setFind(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(find.toLowerCase());
  });

  // Apply sorting based on the selected option
  const sortedProducts = sortOption
    ? filteredProducts.sort((a, b) => {
        if (sortOption === "Low To High") {
          return a.price - b.price;
        } else if (sortOption === "High To Low") {
          return b.price - a.price;
        }
      })
    : filteredProducts;

  return (
    <div className="flex flex-col justify-center items-center px-5 min-h-screen">
      {isLoading ? (
        <img
          className="w-1/5 mix-blend-multiply"
          src="\Loding.gif"
          alt="Loading"
        />
      ) : (
        <>
          <span className="text-3xl font-bold logo">All Products</span>
          <div className="flex w-full justify-between my-2 md:px-16 h-10">
            <div className="w-1/2 md:w-1/3">
              <div className="flex items-center w-full">
                <div
                  className="flex items-center text-black p-2"
                  onClick={toggleSearch}
                >
                  <BsSearch />
                </div>
                <input
                  type="text"
                  name="Search"
                  className={`${
                    serchToggle ? "w-full p-1" : "w-0 md:w-full"
                  } bg-transparent md:p-1 border-b border-black focus:bg-transparent focus:border-black focus:border-b outline-none transition-all duration-200`}
                  placeholder="Search"
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="group font-medium text-sm w-fit relative">
              <button className="p-1 text-center inline-flex items-center border-b border-black w-full">
                <span className="hidden md:flex">Sort by:</span>
                <span className="font-bold px-1">{sortOption}</span>
                <span className="ml-1 md:ml-4">
                  <BsChevronDown />
                </span>
              </button>

              <div className="z-10 hidden bg-white shadow group-hover:flex absolute w-full">
                <ul className="py-2 text-xs md:text-sm text-black w-full">
                  <li
                    className="block px-1 md:px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => setSortOption("Relevent")}
                  >
                    Relevent
                  </li>
                  <li
                    className="block px-1 md:px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => setSortOption("Low To High")}
                  >
                    Price: Low To High
                  </li>
                  <li
                    className="block px-1 md:px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => setSortOption("High To Low")}
                  >
                    Price: High To Low
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-full min-h-screen">
            {sortedProducts.length >= 1 ? (
              sortedProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <div>no product founded</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
