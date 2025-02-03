import ContactDetails from "@/components/common/ContactDetails";
import fetchPropertyData from "@/lib/fetchPropertyData";
import React from "react";

const Menu = async () => {
  const restaurantData = await fetchPropertyData();
  console.log("restaurantData: ", restaurantData);

  return (
    <div>
      <ContactDetails restaurantData={restaurantData} />
    </div>
  );
};

export default Menu;
