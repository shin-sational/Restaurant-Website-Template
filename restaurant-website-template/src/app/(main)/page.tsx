import fetchPropertyData from "@/lib/fetchPropertyData";
import React from "react";

const Home = async () => {
  const restaurantData = await fetchPropertyData();

  return <div>Home</div>;
};

export default Home;
