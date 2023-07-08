import HeroSection from "../Components/HeroSection";
import FeaturesCard from "../Components/FeaturesCard";
import Testimonials from "../Components/Testimonials";
import BlogCard from "../Components/BlogCard";
import ProductCard from "../Components/ProductCard";
import React, { useState, useEffect } from "react";
import { client } from "../../lib/client";
import { useQueries } from "react-query";

function Home() {
  const [products, setproducts] = useState([]);
  const [blogs, setblogs] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const blogQuary = `*[_type == "post"]`;
  //     const blog = await client.fetch(blogQuary);
  //     const productData = await client.fetch(productQuary);
  //     setblogs(blog);
  //     setproducts(productData);
  //   };
  //   getData();
  // }, []);

  const queries = useQueries([
    {
      queryKey: "Best seller",
      queryFn: async () =>
        await client.fetch(`*[_type=="productCategory"&&name=="Best seller"]{
          "products": *[_type=='product' && references(^._id)]
        }[0].products`),
    },
    {
      queryKey: "Most popular",
      queryFn: async () =>
        await client.fetch(`*[_type=="blogCategory"&&name=="Most popular"]{
        "Blogs": *[_type=='post' && references(^._id)]
      }[0].Blogs`),
    },
  ]);

  const query1Result = queries[0];
  const query2Result = queries[1];
  if (query1Result.isLoading || query2Result.isLoading) {
    return <div>Loading...</div>;
  }

  if (query1Result.isError || query2Result.isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  const bestSellerData = query1Result.data;
  const mostPopularData = query2Result.data;
  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection />
      <span className="text-xl font-bold">key features</span>
      <div className="flex flex-wrap justify-between w-full">
        <FeaturesCard
          imge="/sell.svg"
          alte="Affordable Pricing"
          feature="Affordable Pricing"
        />
        <FeaturesCard
          imge="\account_circle.svg"
          alte="account_circle"
          feature="Personalization"
        />
        <FeaturesCard
          imge="\forest.svg"
          alte="forest"
          feature="Eco Friendly product"
        />
        <FeaturesCard
          imge="\package.svg"
          alte="package"
          feature="Fast Shipping"
        />
      </div>
      <span className="text-xl font-bold">Best seller</span>
      <div className="overflow-scroll w-full md:px-20 px-2 hideScrol">
        <div className="flex justify-center w-fit">
          {bestSellerData?.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>
      </div>
      <span className="text-xl font-bold">Testimonials</span>
      <div className="flex md:justify-center overflow-scroll w-full hideScrol">
        <div className="flex justify-center w-fit">
          <Testimonials
            imge="\person1.png"
            alte="person1"
            name="Samantha Patel"
            testimoni="I absolutely love the candles from Wick & Glow! The scents are so unique and luxurious, and they always burn evenly.I've even started giving them as gifts to my friends and family."
          />
          <Testimonials
            imge="\person2.png"
            alte="person2"
            name="John Nguyen"
            testimoni="I stumbled upon Lumin Modern Candles while browsing online, and I'm so glad I did! The candles are beautifully designed and smell amazing. I've been burning one every night to wind down before bed."
          />
          <Testimonials
            imge="\person3.png"
            alte="person3"
            name="Amanda Rodriguez"
            testimoni="I can't recommend Pure Light Candles enough. The quality of the ingredients really shines through in the scent and burn time of each candle. Plus, the minimalist design fits perfectly with my home decor."
          />
        </div>
      </div>
      <span className="text-xl font-bold">Blogs</span>
      <div className="overflow-scroll w-full md:px-20 hideScrol">
        <div className="flex justify-center w-fit">
          {mostPopularData?.map((blog) => {
            return <BlogCard key={blog._id} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
