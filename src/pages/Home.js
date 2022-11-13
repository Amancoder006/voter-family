import React from "react";
import { Country, State, City } from "country-state-city";

const Home = () => {
//   console.log(Country.getAllCountries());
  console.log(State.getStatesOfCountry("IN"));
  return <div>Home</div>;
};
export default Home;
