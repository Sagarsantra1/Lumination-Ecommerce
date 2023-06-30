import BlogCard from "../Components/BlogCard";
import React, { useState, useEffect } from "react";
import { client } from "../../lib/client";

function Blogs() {
  const [blogs, setblogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const quary = `*[_type == "post"]`;
        const blog = await client.fetch(quary);
        setblogs(blog);
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
          src="\src\assets\Loding.gif"
          alt="Loading"
        />
      ) : (
        <>
          <span className="text-3xl font-bold logo">Blogs</span>
          <div className="flex flex-wrap justify-center w-full">
            {blogs.map((blog) => {
              return <BlogCard key={blog._id} blog={blog} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Blogs;
