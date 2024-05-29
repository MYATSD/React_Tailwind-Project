import React from "react";

const Header = () => {
  return (
    <header>
      <div className="  bg-header w-full h-[80px] px-20 flex justify-between  ">
        <div className="">
          <h1 className="text-2xl pt-2 font-bold">Invoice</h1>
          <hr className="w-40" />
          <p className="text-sm font-medium mt-2">Invoice No: #12345</p>
        </div>

        <div className="bg-background w-28 h-[150px] absolute top-10 right-96 print:top-5  print:right-20 border-t-8 border-header border-b-2 flex justify-center items-center">
          <div className="">
            <h1 className="text-header text-3xl text-center font-bold p-2 border-4 rounded-[50%]">
              M
            </h1>
            <p className="text-xl font-semibold">Shop</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
