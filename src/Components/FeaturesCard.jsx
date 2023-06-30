import React from "react";
function FeaturesCard({ imge, alte, feature }) {
  return (
    <div className="p-1 md:p-4 w-1/4 flex flex-col text-center items-center">
      <div className="w-10 sm:w-16 h-10 sm:h-16 inline-flex items-center justify-center rounded-full  text-black mb-1 sm:mb-2 flex-shrink-0">
        <img src={imge} alt={alte} />
      </div>
      <h2 className="text-black text-xs md:text-sm font-medium mb-3">
        {feature}
      </h2>
    </div>
  );
}

export default FeaturesCard;
