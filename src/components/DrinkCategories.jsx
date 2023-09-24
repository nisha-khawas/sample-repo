import React from "react";

export default function DrinkCategories({
  categories,
  onCategorySelected,
  selectedCategory,
}) {
  return (
    <div>
      <div className="flex flex-wrap gap-2 text-center justify-center">
        {categories?.map((item, index) => (
          <span
            onClick={() => {
              onCategorySelected(item.strCategory);
            }}
            key={index}
            className={` hover:bg-green-500 cursor-pointer p-2 rounded-lg border-[1px] border-blue-300 
            text[12px]
            ${
              selectedCategory === item?.strCategory
                ? "border-none drop-shadow-md text-blue-500 bg-blue-200"
                : "drop-shadow-xs text-blue-300 "
            }
            `}
          >
            {item?.strCategory}
          </span>
        ))}
      </div>
    </div>
  );
}
