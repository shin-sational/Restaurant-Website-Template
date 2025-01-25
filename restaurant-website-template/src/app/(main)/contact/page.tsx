import CustomSectionTitle from "@/components/common/atoms/CustomSectionTitle";
import ContactForm from "@/components/Contact/ContactForm";
import fetchPropertyData from "@/lib/fetchPropertyData";
import React from "react";

const Contact = async () => {
  const restaurantData = await fetchPropertyData();
  return (
    // Contact Form
    <div className="w-full px-[16px] py-[40px]">
      <div className="flex flex-col items-center gap-[32px] w-full">
        <CustomSectionTitle>Send Us Message</CustomSectionTitle>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
