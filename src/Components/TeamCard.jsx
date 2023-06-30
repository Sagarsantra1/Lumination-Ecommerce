function TeamCard({ imge, alte, name, designation, qulification }) {
  return (
    <div className="p-2 w-60 h-52 m-2 overflow-hidden flex flex-col text-center items-center">
      <div className="w-16 h-16 inline-flex items-center justify-center rounded-full mb-1 flex-shrink-0">
        <img src={imge} alt={alte} />
      </div>
      <div className="flex-grow">
        <h2 className="text-black text-base title-font font-medium">{name}</h2>
        <p className="leading-relaxed text-sm text-gray-500 truncate">
          {designation}
        </p>
        <p className="leading-relaxed text-sm text-gray-500">{qulification}</p>
      </div>
    </div>
  );
}

export default TeamCard;
