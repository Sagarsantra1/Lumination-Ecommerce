import React from "react";
function Testimonials({ imge, alte, name, testimoni }) {
  return (
    <div className=" w-screen px-5 md:w-80 m-2 h-52 flex flex-col text-center items-center overflow-hidden">
      <div className="w-16 h-16 inline-flex items-center justify-center rounded-full mb-2 flex-shrink-0">
        <img src={imge} alt={alte} />
      </div>
      <div className="flex-grow">
        <h2 className="text-black text-base title-font font-medium mb-1">
          {name}
        </h2>
        <p className="text-sm w-full leading-4 text-gray-600">{testimoni}</p>
      </div>
    </div>
  );
}

export default Testimonials;
