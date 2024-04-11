import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import { useEffect, useState } from "react";

const Bar = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://gkanishk-devbazar-be.vercel.app/products")
      .then((res) => {
        setItems(res.data.response);
      });
  }, []);

  return (
    <>
      <div className=" shadow flex justify-between container h-10 w-full p-1">
        <h1 className="text-normal font-light">DEV BAZAR</h1>
        <div className="flex justify-between w-36">
          <span className="flex">Home</span>
          <span className="flex">Product</span>
        </div>

        <div className="flex justify-evenly w-36">
          <FavoriteIcon />
          <ShoppingCartIcon />
          <ShoppingCartIcon />
        </div>
      </div>
      <div className="container pt-10 p-2  grid-col-8">
        <div className="grid grid-cols-8 gap-8 h-full">
          <div className=" outline outline-1 outline-slate-300  col-span-2 gap-10 h-80   ">
            <div className="flex h-10 px-5 py-2  justify-between">
              <span>Filter</span>
              <span>Filter</span>
            </div>
            <div className="outline outline-1 mx-10 outline-gray-200 h-0 w-100"></div>
          </div>
          <div className=" grid gap-10 m-1 grid-cols-4 col-span-6  ">
            {items.map((item) => {
              return (
                <div
                  key={item.id}
                  className=" hover:shadow-md shadow-gray-900 h-80 col-span-1 outline outline-1 outline-gray-200"
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bar;
