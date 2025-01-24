import fetchPropertyData from "@/lib/fetchPropertyData";
import React from "react";

const Menu = async () => {
  const restaurantData = await fetchPropertyData();
  return <div>menu</div>;
};

export default Menu;
