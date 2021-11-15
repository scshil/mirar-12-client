import React from "react";
import Bannar from "../Bannar/Bannar";
import Products from "../Products/Prodects";
import Review from "../Review/Review";
import Upcomming from "../Upcomming/Upcomming";
const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Products></Products>
      <Upcomming></Upcomming>
      <Review></Review>
    </div>
  );
};

export default Home;
