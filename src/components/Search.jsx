import React from "react";
import { useRef } from "react";

export default function Search({ onClickSearchButton }) {
  const inputRef = useRef();
  const handleSearch = () => {
    let val = inputRef.current.value;
    onClickSearchButton(val);
  };
  return (
    <div className="flex items-center  flex-row-reverse">
      <div
        onClick={handleSearch}
        className="hover:opacity-60 cursor-pointer rounded-r-md p-2.5 bg-blue-400  border-[1px] border-blue-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <input
      onChange={handleSearch}
        placeholder="Search By Name"
        ref={inputRef}
        className=" rounded-l-md rounded-r-md w-full outline-none p-2 border-[1px] border-blue-300 text-blue-300"
      />
    </div>
  );
}
