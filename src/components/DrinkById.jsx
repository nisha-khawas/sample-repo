import React, { useEffect } from "react";
import { getDrinkById } from "../apis/drink";
import { useParams } from "react-router-dom";
import DrinkDetail from "./DrinkDetail";

export default function DrinkById() {
  const [drink, setDrink] = React.useState({});
  const { drinkId } = useParams();
  useEffect(() => {
    getDrinkById(drinkId).then((res) => {
      setDrink(res?.drinks?.[0]);
      document.title = "res?.drinks?.[0] ";
    });
  }, []);

  return (
    <div>
      <DrinkDetail drink={drink} />
    </div>
  );
}
