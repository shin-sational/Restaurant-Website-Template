import PageTitleImage from "@/components/common/PageTitleImage";
import fetchPropertyData from "@/lib/fetchPropertyData";
import React from "react";

const Home = async () => {
  const restaurantData = await fetchPropertyData();

  return (
    <section>
      {/* ページタイトル */}
      <PageTitleImage
        backgroundImageSrc={restaurantData.Main_Branch_Info[0].Home_Menu_Photo1}
        type="home"
        restaurantName={restaurantData.Main_Branch_Info[0].Name}
      />
    </section>
  );
};

export default Home;
