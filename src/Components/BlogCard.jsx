import { BsArrowRight } from "react-icons/bs";
import { urlFor } from "../../lib/client";
import { Link } from "react-router-dom";

function BlogCard(blog) {
  const { title, coverImage, description, author, slug, content } = blog.blog;
  return (
    <div className="m-4 BlogCard border border-gray-300 rounded-lg overflow-hidden hover:shadow-gray-300 hover:shadow-lg group h-96 w-80">
      <div className="overflow-hidden h-1/2">
        <img
          className=" object-cover object-center group-hover:scale-110 transition-all duration-300 "
          src={urlFor(coverImage && coverImage)}
          alt={`${title} image`}
        />
      </div>
      <div className="p-2 h-1/2 flex flex-col justify-between ">
        <h1 className="title-font text-base font-medium text-black text-ellipsis line-clamp-2">
          {title}
        </h1>
        <h2 className="tracking-widest text-xs font-medium text-gray-500">
          Author-{author}
        </h2>
        <p className=" h-2/4 pt-1 text-sm text-gray-600 text-ellipsis line-clamp-4 leading-5 ">
          {description}
        </p>
        <div className="flex items-center flex-wrap">
          <Link
            className="text-gray-900 inline-flex items-center group"
            to={`/Blogs/${slug.current}`}
          >
            Learn More <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
