import React from "react";
import { getMealCategories } from "../apis/meal1";
import { useState } from "react";
import { useEffect } from "react";

export default function Meal() {
  const [mealCategories, setMealCategories] = useState([]);
  useEffect(() => {
    getMealCategories()
      .then((res) => {
        setMealCategories(res?.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="max-w-lg m-auto ">
      <div className="flex flex-wrap gap-2 text-center justify-center">
        {mealCategories?.map((category, index) => (
          <div
            className=" hover:bg-green-500 cursor-pointer p-2 rounded-lg border-[1px] border-blue-300 
            text[12px]"
            key={index}
          >
            {category.strCategory}
          </div>
        ))}
      </div>
    </div>
  );
}
