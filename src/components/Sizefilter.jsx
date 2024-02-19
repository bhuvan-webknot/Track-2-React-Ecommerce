import React from "react";

const Sizefilter = (props) => {
  return (
    <React.Fragment>
      <h1 className="mt-11 font-semibold text-md  mb-8">Sizes: </h1>
      <div className="w-full flex justify-between align-middle">
        <button
          onClick={() => props.retSize("S")}
          className=" size-btn bg-gray-200 hover:bg-gray-400 cursor-pointer focus-within:bg-cyan-400 text-slate-800  font-semibold"
        >
          S
        </button>
        <button
          onClick={() => props.retSize("M")}
          className="size-btn bg-gray-200 hover:bg-gray-400 cursor-pointer focus-within:bg-cyan-400 text-slate-800  font-semibold"
        >
          M
        </button>
        <button
          onClick={() => props.retSize("L")}
          className=" size-btn bg-gray-200 hover:bg-gray-400 cursor-pointer focus-within:bg-cyan-400 text-slate-800  font-semibold"
        >
          L
        </button>
        <button
          onClick={() => props.retSize("XL")}
          className="size-btn bg-gray-200 hover:bg-gray-400 cursor-pointer focus-within:bg-cyan-400 text-slate-800  font-semibold"
        >
          XL
        </button>
      </div>
    </React.Fragment>
  );
};

export default Sizefilter;
