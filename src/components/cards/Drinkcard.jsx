import React from "react";

export default function Drinkcard({ drink }) {
  return (
    <div>
      <img  className='rounded-t-xl'src={drink?.strDrinkThumb} alt="" />
      <span className="p-5 text-[12px] font-medium font -[cursive]">{drink?.strDrink}</span>
    </div>
  );
}
