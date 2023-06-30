import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../../lib/client";
import { PortableText } from "@portabletext/react";
function SingalBlog() {
  const { slug } = useParams();
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const quary = `*[_type == "post"&&slug.current == "${slug}"]`;
      const blog = await client.fetch(quary);
      setblogs(blog[0]);
    };
    getData();
  }, [slug]);
  const { title, coverImage, content, publishedAt } = blogs;

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
