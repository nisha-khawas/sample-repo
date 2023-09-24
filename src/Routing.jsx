import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Countries from "./components/Countries";
import Home from "./components/Home";
import RandomDrink from "./components/RandomDrink";
import Users from "./components/Users";
import Objects from "./components/Objects";
import DrinkById from "./components/DrinkById";
import Drinks from "./components/Drinks";
import Meal from "./components/Meal";
import UserById from "./components/UserById";
import Login from "./components/Login";
import { isUserLoggedIn } from "./utils/Login";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export default function Routing() {
  return (
    <div>
      {isUserLoggedIn() ? (
        <Switch>
          <Route path="/countries">
            <Countries />
          </Route>
          <Route path="/drinks/:drinkId">
            <DrinkById />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route path="/drinks">
            <Drinks />
          </Route>
          <Route exact path="/objects">
            <Objects />
          </Route>
          <Route path="/random-drink">
            <RandomDrink />
          </Route>
          <Route path="/meal">
            <Meal />
          </Route>
          <Route path="/users/:userId">
            <UserById />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/login">
            <Login />
            <Redirect path="#" to={"/login"} />
          </Route>
        </Switch>
      )}
    </div>
  );
}
