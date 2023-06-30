import HeroSection from "../Components/HeroSection";
import FeaturesCard from "../Components/FeaturesCard";
import Testimonials from "../Components/Testimonials";
import BlogCard from "../Components/BlogCard";
import blogs from "../Database/BlogsData";
import ProductCard from "../Components/ProductCard";
import React, { useState, useEffect } from "react";
import { client } from "../../lib/client";
function Home() {
  const [products, setproducts] = useState([]);
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const blogQuary = `*[_type == "post"]`;
      const productQuary = `*[_type == "product"]`;
      const blog = await client.fetch(blogQuary);
      const productData = await client.fetch(productQuary);
      setblogs(blog);
      setproducts(productData);
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection />
      <span className="text-xl font-bold">key features</span>
      <div className="flex flex-wrap justify-between w-full">
        <FeaturesCard
          imge="src\assets\sell.svg"
          alte="sell"
          feature="Affordable Pricing"
        />
        <FeaturesCard
          imge="src\assets\account_circle.svg"
          alte="account_circle"
          feature="Personalization"
        />
        <FeaturesCard
          imge="src\assets\forest.svg"
          alte="forest"
          feature="Eco Friendly product"
        />
        <FeaturesCard
          imge="src\assets\package.svg"
          alte="package"
          feature="Fast Shipping"
        />
      </div>
      <span className="text-xl font-bold">Best seller</span>
      <div className="overflow-scroll w-full px-28 hideScrol">
        <div className="flex justify-center w-fit">
          {products?.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>
      </div>
      <span className="text-xl font-bold">Testimonials</span>
      <div className="flex md:justify-center overflow-scroll w-full hideScrol">
        <div className="flex justify-center w-fit">
          <Testimonials
            imge="src\assets\person1.png"
            alte="person1"
            name="Samantha Patel"
            testimoni="I absolutely love the candles from Wick & Glow! The scents are so unique and luxurious, and they always burn evenly.I've even started giving them as gifts to my friends and family."
          />
          <Testimonials
            imge="src\assets\person2.png"
            alte="person2"
            name="John Nguyen"
            testimoni="I stumbled upon Lumin Modern Candles while browsing online, and I'm so glad I did! The candles are beautifully designed and smell amazing. I've been burning one every night to wind down before bed."
          />
          <Testimonials
            imge="src\assets\person3.png"
            alte="person3"
            name="Amanda Rodriguez"
            testimoni="I can't recommend Pure Light Candles enough. The quality of the ingredients really shines through in the scent and burn time of each candle. Plus, the minimalist design fits perfectly with my home decor."
          />
        </div>
      </div>
      <span className="text-xl font-bold">Blogs</span>
      <div className="overflow-scroll w-full px-20 hideScrol">
        <div className="flex justify-center w-fit">
          {blogs.map((blog) => {
            return <BlogCard key={blog._id} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
