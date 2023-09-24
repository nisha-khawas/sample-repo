import { getCountries } from "../apis/country";
import React from "react";
import CountryCard from "./cards/CountryCard";

export default function Countries() {
  const [countries, setCountries] = React.useState([]);
  React.useEffect(() => {
    console.log("inside get countries");
    document.title = "Countries";
    getCountries()
      .then((res) => {
        setCountries(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   return <div> This is Country</div>;
  return (
    <div>
      <button
        onClick={() => {
          setCountries([]);
        }}
      >
        Clear Countries
      </button>
      <div className="countriesWrapper">
        {countries?.map((item, index) => (
          // <div key={index}>
          <div key={index}>
            <CountryCard country={item} />
            {/* <img src={item.flags.png} alt="" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
