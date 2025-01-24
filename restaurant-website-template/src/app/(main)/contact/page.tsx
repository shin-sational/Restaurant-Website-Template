import fetchPropertyData from "@/lib/fetchPropertyData";
import React from "react";

const Contact = async () => {
  const restaurantData = await fetchPropertyData();
  return <div>contact</div>;
};

export default Contact;
