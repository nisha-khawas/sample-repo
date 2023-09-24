import React, { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Countries from "./components/Countries";
import Routing from "./Routing";
import Header from "./components/Header";
import "./components/common.css";
import RandomDrink from "./components/RandomDrink";
import "./App.css";
import Objects from "./components/Objects";
import { initializeFirebase } from "./utils/Firebase";
import { isUserLoggedIn } from "./utils/Login";

export default function App() {
  useEffect(() => {
    initializeFirebase();
  }, []);
  // const[users,setUsers]= React.useState([])
  // const [water, setWater] = React.useState(["Liquid"]);
  // const [counter, setCounter] = React.useState(0);
  // const [users, setUsers] = React.useState([]);

  // // const updateWater = (val) => {
  // //   setWater("val");
  // // };

  // const changeToIce = () => {
  //   setWater("ice");
  // };

  // const changeToVapour = () => {
  //   setWater("Vapour");
  // };
  // const changeToLiquid = () => {
  //   setWater("Liquid");
  // };
  // // const changeToLiquid = () => {
  // //   setWater("Liquid");
  // // };
  // // function handleClick(res) {
  // //   // alert("Hello");
  // //   console.log(res);
  // // }

  // const increase = () => {
  //   setCounter(counter + 1);
  // };
  // const decrease = () => {
  //   setCounter(counter - 1);
  // };
  return (
    <div>
      {isUserLoggedIn() ? <Header /> : ""}
      <Routing />
    </div>
  );
  // return (
  //   <div>
  //     <Header1 />
  //     <Routing1 />
  //   </div>
  //   <div>
  //     <Practice />
  //     <Countries />
  //   </div>
  // );
}
