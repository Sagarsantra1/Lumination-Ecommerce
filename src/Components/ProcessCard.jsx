import React from "react";

function ProcessCard({imge, alte, process, point1, point2, point3, point4}) {
  return (
    <div className="p-2 w-56 h-60 flex flex-col text-center items-center rounded-lg m-3 opacity-80 bg-slate-50">
      <div className="w-16 h-16 inline-flex items-center justify-center border-2 border-black rounded-full mb-2 flex-shrink-0">
      <img src={imge} alt={alte} />
      </div>
      <div className="overflow-hidden text w-full">
        <h2 className="text-black text-sm title-font font-bold mb-3">
          {process}
        </h2>
          <ul className="list-disc pl-4 leading-relaxed text-sm text-left w-full">
            <li>{point1}</li>
            <li>{point2}</li>
            <li>{point3}</li>
            <li>{point4}</li>
          </ul>
      </div>
    </div>
  );
}

export default ProcessCard;
