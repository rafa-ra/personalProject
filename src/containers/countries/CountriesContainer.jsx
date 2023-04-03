import React from "react";
import CountryBanner from "../../components/countryBanner/CountryBanner";
import { countries } from "../../assets/data";
import styles from "./CountriesContainer.scss";

const CountriesContainer = () => {
  return (
    <div className="countries-container" styles={styles}>
      {countries.map((e, index) => (
        <CountryBanner countryInfo={e} count={index} />
      ))}
    </div>
  );
};

export default CountriesContainer;