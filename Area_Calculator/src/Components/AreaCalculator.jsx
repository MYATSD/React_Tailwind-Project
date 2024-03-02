import React, { useState } from "react";

const AreaCalculator = () => {
  const [width, setWidth] = useState(" ");
  const [height, setHeight] = useState(" ");
  const calBtn = () => {};
  const inputWidth = (e) => {
    // setWidth(e.target.value);
  };
  const inputHeight = (e) => {
    // setHeight(e.target.value);
  };
  return (
    <div className="h-screen">
      <div>
        <form action=""></form>
      </div>
      <div className={`border border-black mx-auto mt-5 w-[700px] h-[400px]`}>
        <div className="flex m-5 justify-between mt-10 items-center">
          <p className="text-lg font-bold">
            Result: <span> 1000 * 50 = 50000 </span>
          </p>

          <div>
            <button className="btn px-5 rounded-md py-1 mr-2 font-semibold bg-zinc-400">
              Store
            </button>
            <button className="btn  px-5 rounded-md py-1 font-semibold mr-20 bg-zinc-400">
              Clear
            </button>
          </div>
        </div>
        <div className="flex m-5 justify-start items-center mt-10">
          <div className="mr-4">
            <input
              type="text"
              placeholder="Width"
              value={width}
              onChange={inputWidth}
              className=""
            />
            <input
              type="number"
              placeholder="Height"
              value={height}
              onChange={inputHeight}
            />
          </div>
          <div className="">
            <button className="btn  p-2 bg-zinc-400 " onClick={calBtn()}>
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaCalculator;
