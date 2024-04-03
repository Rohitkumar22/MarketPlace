import { useEffect } from "react";
import Card from "./Card";
import Filter from "./Filter";
import { useState } from "react";
import axios from "axios";

const Wrapper = () => {
  const [items, setitem] = useState([]);
  const [filtereditems, setfiltereditem] = useState([]);
  const [filter, setfilter] = useState("false");

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://gkanishk-devbazar-be.vercel.app/products"
      );
      setitem(response.data.response);
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="container pt-10 grid">
      <div className="grid grid-cols-8 p-1 gap-10 m-2">
        <Filter array={items} newarray={filtereditems} flag={setfilter} />
        <div className=" col-span-6 h-full p-5 m-2">
          <div className="grid grid-cols-4">
            {items.map((item) => {
              console.log(item);
              return <Card key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
