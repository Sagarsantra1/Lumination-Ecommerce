import { Link } from "react-router-dom";
import { urlFor } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";

function ProductCard(product) {
  const { image, name, price, details, slug } = product.product;
  const { onAdd } = useStateContext();
  return (
    <div className="productCard overflow-hidden m-2 mb-4 rounded-xl border border-gray-300 hover:shadow-gray-300 hover:shadow-lg group">
      <Link to={`/Product/${slug.current}`}>
        <div className="block relative h-40 rounded overflow-hidden ">
          <img
            alt="product image"
            className="object-cover object-center w-full h-full block group-hover:scale-110 transition-all duration-300 "
            src={urlFor(image && image[0])}
          />
        </div>
        <div className=" flex flex-col justify-start p-2 h-28">
          <h2 className="text-gray-900  text-sm font-bold flex justify-between pb-2">
            {name} <p className="">${price}</p>
          </h2>
          <h3 className="text-gray-500 text-sm h-16 text-ellipsis line-clamp-3 ">
            {details}
          </h3>
        </div>
      </Link>
      <div className="">
        <button
          className="p-1 px-2 m-2 flex-shrink-0 inline-flex border-2 border-gray-900 text-black hover:text-white text-center text-sm focus:outline-none hover:bg-gray-900 rounded-full"
          onClick={() => onAdd(product.product, 1)}
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
