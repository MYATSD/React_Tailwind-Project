import React from "react";
import { useState } from "react";

const ImageHover = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  console.log(" hover1" + hover1);
  return (
    <div className={`bg-zinc-100  w-[800px] h-[500px] relative mx-auto mt-10 `}>
      <div
        className={`absolute bg-[url("./images/img7.jpg")] bg-cover w-[100%] h-[100%] 
        `}
        onMouseEnter={() => {
          setHover1(true);
          console.log("hover1" + hover1);
        }}
        onMouseLeave={() => {
          setHover1(false);
        }}
        style={{
          clipPath: hover1
            ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
            : "polygon(0 0, 34% 0, 50% 100%, 0 100%)",

          display: (hover2 || hover3) && "none",
        }}
      ></div>
      <div
        className={`absolute bg-[url('./images/image5.jpg')] bg-cover w-[100%] h-[100%]  `}
        onMouseEnter={() => {
          setHover2(true);
        }}
        onMouseLeave={() => {
          setHover2(false);
        }}
        style={{
          clipPath: hover2
            ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
            : "polygon(35% 0, 63% 0, 85% 100%, 20% 100%)",
          display: (hover1 || hover3) && "none",
        }}
      ></div>
      <div
        className={`absolute bg-[url('./images/image6.jpg')] bg-cover w-[100%] h-[100%] `}
        onMouseEnter={() => {
          setHover3(true);
        }}
        onMouseLeave={() => {
          setHover3(false);
        }}
        style={{
          clipPath: hover3
            ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
            : "polygon(63% 0, 100% 0, 100% 100%, 85% 100%)",
          display: (hover2 || hover1) && "none",
        }}
      ></div>
    </div>
  );
};

export default ImageHover;
