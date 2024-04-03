function Card({ item }) {
  return (
    <>
      <div className=" mb-4 overflow-hidden  outline outline-1 outline-slate-100  w-56 card max-h-max hover:shadow-lg hover:outline-0 ">
        <img className="w-56" src={item.attributes.img} alt="Product Image" />
        <div className="px-6 py-4">
          <div className="flex px-2 justify-between">
            <div className=" text-xl mb-2">{item.name}</div>
          </div>
          <div className="px-2 mt-3">
            <p className="text-gray-700 text-base">{item.attributes.brand}</p>
            <p className="text-gray-700  mt text-base mt-2">
              Price: {item.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
