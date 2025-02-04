import CustomSectionTitle from "@/components/common/atoms/CustomSectionTitle";
import DataFetcher from "@/components/common/DataFetcher";
import PageTitleImage from "@/components/common/PageTitleImage";
import ContactForm from "@/components/Contact/ContactForm";
import React from "react";

const Contact = async () => {
  return (
    <DataFetcher>
      {(restaurantData) => (
        <section>
          {/* ページタイトル */}
          <PageTitleImage
            backgroundImageSrc={
              restaurantData.Main_Branch_Info[0].Home_Menu_Photo3
            }
            type="contact"
          />

          {/* Contact Form */}
          <div className="w-full px-[16px] py-[40px]">
            <div className="flex flex-col items-center gap-[32px] w-full">
              <CustomSectionTitle>Send Us Message</CustomSectionTitle>
              <ContactForm />
            </div>
          </div>
        </section>
      )}
    </DataFetcher>
  );
};

export default Contact;
