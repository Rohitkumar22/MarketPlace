function Filter({ array, flag, newarray }) {
  const json = [
    { value: 1, text: "Low to High" },
    { value: 2, text: "High to Low" },
  ];

  const Sort = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value == 1) {
      array.sort((a, b) => {
        return a.price - b.price;
      });

      newarray([...array]);
    } else {
      array.sort((a, b) => {
        console.log("ulta");
        return b.price - a.price;
      });
      newarray([...array]);
    }

    console.log("Array sorted");
  };

  return (
    <>
      <div className="outline-1 outline-slate-200 outline	col-span-2 h-80 p-5 m-2">
        <div className="flex flex-row justify-between m-1 font-normal">
          <span className="flex m-0 mb-1 ">Filter</span>
          <span className="flex cursor-pointer ">Clear All</span>
        </div>
        <div className=" outline outline-slate-100 outline-1 "></div>
        <div className="flex mt-2 flex-row justify-center m-1  font-normal">
          <input
            className="flex  p-1 w-96 border "
            placeholder="Search for Product"
          />
        </div>

        <div className="container mt-1 mb-1 ">
          <div className=" font-normal">Sort By:</div>
          <div className="flex flex-col">
            {json.map((entry) => {
              return (
                <>
                  {" "}
                  <div className="flex-col font-thin">
                    <label className="font-thin">
                      <input
                        key={entry.value}
                        onChange={Sort}
                        type="radio"
                        name="Radiogroup"
                        value={entry.value}
                      />{" "}
                      {entry.text}
                    </label>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="container mt-1 mb-1 ">
          <div className=" font-normal text-base">Brands</div>
          <div className="container">
            <div className="flex-col">
              <label className="  flex font-thin">
                <input type="checkbox" name="Radiogroup" value="Levis" /> Levis
              </label>
              <label className="  flex font-thin">
                <input type="checkbox" name="Radiogroup" value="HRX" /> HRX
              </label>
              <label className="  flex font-thin">
                <input type="checkbox" name="Radiogroup" value="Only" /> Only
              </label>
              <label className=" flex flex font-thin">
                <input type="checkbox" name="Radiogroup" value="Nautica" />{" "}
                Nautica
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
