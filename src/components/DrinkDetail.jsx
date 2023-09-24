import React from "react";
import ReactPlayer from "react-player";

export default function DrinkDetail({ drink }) {
  return (
    <div className={"flex flex-col gap-3 max-w-lg mx-auto my-2"}>
      <div
        className="cursor-pointer"
        onClick={() => {
          window.history.back();
        }}
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
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl">{drink?.strDrink}</span>
        <div className="text-blue-400 text-[10px] p-1 border-blue-400 border-[0.5px] rounded-xl">
          {drink?.strCategory}
        </div>
      </div>
      {drink?.strVideo ? (
        <ReactPlayer width={"100%"} height={"800"} url={drink?.strVideo} />
      ) : (
        <img
          alt=""
          className={
            "shadow-blue-500/80 object-cover self-center rounded-lg shadow-md h-[200px] w-[200px]"
          }
          src={drink?.strDrinkThumb}
        />
      )}
      <span className="text-gray-500 text-sm">{drink?.strInstructions}</span>

      <div>
        <h4 className="font-semibold">Glass</h4>
        <span>{drink?.strGlass}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold">Ingredients</span>
        <span className="font-bold">Quantity</span>
      </div>
      {Array.from({ length: 15 }).map((item, index) => {
        if (
          !drink?.[`strIngredient${index + 1}`] &&
          !drink?.[`strMeasure${index + 1}`]
        ) {
          return "";
        }
        return (
          <div key={index} className="flex justify-between items-center">
            <span className="font-200">
              {drink?.[`strIngredient${index + 1}`]}
            </span>
            <span className="font-200">
              {drink?.[`strMeasure${index + 1}`]}
            </span>
          </div>
        );
      })}
    </div>
  );
}
