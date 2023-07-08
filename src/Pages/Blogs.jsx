import BlogCard from "../Components/BlogCard";
import React from "react";
import { client } from "../../lib/client";
import { useQuery } from "react-query";

function Blogs() {
  const getData = async () => {
    const quary = `*[_type == "post"]`;
    return await client.fetch(quary);
  };

  const {data,isLoading,error}=useQuery("allBlogs", getData);


  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center px-5 min-h-screen">
      <img
        className="w-1/5 mix-blend-multiply"
        src="\Loding.gif"
        alt="Loading"
      />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center px-5 min-h-screen">
      <span className="text-3xl font-bold logo">Blogs</span>
      <div className="flex flex-wrap justify-center w-full">
        {data&&data.map((blog) => {
          return <BlogCard key={blog._id} blog={blog} />;
        })}
      </div>
    </div>
  );
}

export default Blogs;
