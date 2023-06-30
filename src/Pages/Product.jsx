import ProductCard from "../Components/ProductCard";
import React, { useState, useEffect } from "react";
import { client } from "../../lib/client";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const quary = `*[_type == "product"]`;
        const productData = await client.fetch(quary);
        setProducts(productData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-5 min-h-screen">
      {isLoading ? (
        <img
          className="w-1/5 mix-blend-multiply"
          src="\\Loding.gif"
          alt="Loading"
        />
      ) : (
        <>
          <span className="text-3xl font-bold logo">All Products</span>
          <span className="flex w-full justify-start font-bold px-10">
            Best seller
          </span>
          <div className="flex flex-wrap justify-center w-full">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
