import React, { useEffect } from "react";
import styles from "./Card.module.css";

export default function CountryCard({ country }) {
  useEffect(() => {
    return () => {
      console.log(`components,unmounting ${country?.name?.common}`);
    };
  });
  return (
    <div className={styles.cardWrapper}>
      <img className={styles.cardImage} src={country.flags.png} alt="" />
      <div>
        <h3>{country?.name?.common}</h3>
        <span>{country?.capital?.join("")}</span>
      </div>
    </div>
  );
}
