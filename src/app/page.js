import AvailableRoom from "@/components/AvailableRoom";
import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import Works from "@/components/Works";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <AvailableRoom />
      <Feature />
      <Works />
    </div>
  );
};

export default Home;
