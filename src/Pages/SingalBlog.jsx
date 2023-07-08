import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../../lib/client";
import { PortableText } from "@portabletext/react";
import { useQuery } from "react-query";
function SingalBlog() {
  const { slug } = useParams();

  const getData = async () => {
    const quary = `*[_type == "post"&&slug.current == "${slug}"][0]`;
    return await client.fetch(quary);
  };

  const { data, isLoading, error } = useQuery(`${slug}`, getData);

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
  const { title, coverImage, content, publishedAt } = data;

  return (
    <div className="px-5 py-5 md:px-32 text-gray-600">
      {coverImage && (
        <img
          className="md:max-h-96 mx-auto"
          src={urlFor(coverImage)}
          alt={`${title} image`}
        />
      )}
      <h1 className="text-3xl md:text-5xl text-black py-5">{title}</h1>
      <span className="my-5">{publishedAt}</span>
      <div className="  leading-6 space-y-5 md:space-y-10 mt-5">
        <PortableText value={content} />
      </div>
    </div>
  );
}

export default SingalBlog;
