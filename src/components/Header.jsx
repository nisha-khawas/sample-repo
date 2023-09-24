import React from "react";
import { Link } from "react-router-dom";
import { getUser, isUserLoggedIn } from "../utils/Login";

export default function Header() {
  return (
    <div className="headerWrapper">
      <div className="flex gap-5 my-2 text-white">
        <Link to={"/"}>Home</Link>
        <Link to={"/countries"}>Countries</Link>
        <Link to={"/random-drink"}> RandomDrinks</Link>
        <Link to={"/drinks"}>Drinks</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/meal"}>Meal</Link>
        <Link to={"/login"}>Login</Link>
      </div>
      <div>
        {isUserLoggedIn() ? (
          <div className="flex border-white items-center gap-1 border-[0.5px] p-2 rounded-md ">
            <img
              className="rounded-full w-8 h-8 "
              src={getUser().image}
              alt=""
            />
            <div className="grid gap-1">
              <span className="text-[14px]">{getUser().name}</span>
              <span className="text-[12px]">{getUser().email}</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
