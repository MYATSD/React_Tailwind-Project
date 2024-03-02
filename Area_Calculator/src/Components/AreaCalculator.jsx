import React, { useState } from "react";
import StoreList from "./StoreList";

const AreaCalculator = () => {
  const [width, setWidth] = useState(" ");
  const [height, setHeight] = useState(" ");
  const [originalWidth, setOriginalWidth] = useState(" ");
  const [originalHeight, setOriginalHeight] = useState(" ");
  const [area, setArea] = useState();
  const [addList, setAddList] = useState(false);
  const [storeList, setStoreList] = useState([]);
  const calBtn = () => {
    const a = originalWidth * originalHeight;
    console.log(a);
    setArea(a);
    setWidth(" ");
    setHeight(" ");
  };
  const clearInput = () => {
    setWidth(" ");
    setHeight(" ");
    setArea(" ");
  };
  const storeBtn = () => {
    console.log(addList);
    const newId = storeList.length + 1;
    setStoreList([
      ...storeList,
      { width: originalWidth, height: originalHeight, area, key: newId },
    ]);
    setAddList(true);
    setArea(" ");
  };
  // console.log(storeList);
  return (
    <div className="h-screen">
      <div className={`border border-black mx-auto mt-5 w-[700px] h-[400px]`}>
        <div className="flex m-5 justify-between mt-10 items-center">
          <p className="text-lg font-bold">
            Result: <span>{area}</span>
          </p>

          <div>
            <button
              className="btn p-2 px-5 rounded-md  mr-2 font-semibold bg-zinc-200"
              onClick={storeBtn}
            >
              Store
            </button>
            <button
              className="btn  p-2 px-5 rounded-md  font-semibold mr-20 bg-zinc-200"
              onClick={clearInput}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="flex m-5 justify-start items-center mt-10">
          <div className="mr-4">
            <input
              type="number"
              value={width}
              placeholder="Width"
              className="bg-zinc-200 p-2 mr-2 rounded-sm"
              onChange={(e) => {
                setWidth(e.target.valueAsNumber);
                setOriginalWidth(e.target.valueAsNumber);
              }}
            />
            <input
              type="number"
              value={height}
              placeholder="Height"
              className="bg-zinc-200 p-2 border  rounded-sm"
              onChange={(e) => {
                setHeight(e.target.valueAsNumber);
                setOriginalHeight(e.target.valueAsNumber);
              }}
            />
          </div>
          <div className="">
            <button
              className="btn  p-2 bg-zinc-200 rounded-md"
              onClick={calBtn}
            >
              Calculate
            </button>
          </div>
        </div>

        {addList &&
          storeList.map(({ width, height, area, id }) => {
            return (
              <div className="mx-5 " key={id}>
                <li>
                  {width} * {height} = {area}
                </li>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AreaCalculator;
