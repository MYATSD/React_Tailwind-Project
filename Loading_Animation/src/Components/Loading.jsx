import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div
        className={`w-5  h-5 mx-1 bg-teal-400 rounded-full animate-[load_1s_ease_0.5s_infinite]`}
      ></div>
      <div
        className={`w-5  h-5 mx-1 bg-teal-400 rounded-full animate-[load_1s_ease_0.6s_infinite]`}
      ></div>
      <div
        className={`w-5  h-5 mx-1 bg-teal-400 rounded-full animate-[load_1s_ease_0.7s_infinite]`}
      ></div>
      <div
        className={`w-5  h-5 mx-1 bg-teal-400 rounded-full animate-[load_1s_ease_0.8s_infinite]`}
      ></div>
      <div
        className={`w-5  h-5 mx-1 bg-teal-400 rounded-full animate-[load_1s_ease_0.9s_infinite]`}
      ></div>
    </div>
  );
};

export default Loading;
