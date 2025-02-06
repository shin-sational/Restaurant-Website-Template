import BusinessHours from "@/components/common/BusinessHours";
import ContactDetails from "@/components/common/ContactDetails";
import fetchPropertyData from "@/lib/fetchPropertyData";
import React from "react";

const playground = async () => {
  const restaurantData = await fetchPropertyData();
  return (
    <div>
      <BusinessHours branchInfo={restaurantData.Main_Branch_Info} />
    </div>
  );
};

export default playground;
