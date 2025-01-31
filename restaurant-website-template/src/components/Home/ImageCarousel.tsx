"use client";
import React, { FC, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomImage from "../common/atoms/CustomImage";
import { RestaurantData } from "@/type/notionFrontend.Type";
import Autoplay from "embla-carousel-autoplay";

interface Props {
  restaurantData: RestaurantData;
}
const ImageCarousel: FC<Props> = ({ restaurantData }) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="flex flex-col items-center justify-center w-full gap-">
      <Carousel
        plugins={[plugin.current]}
        opts={{ align: "start", loop: true }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-4/5"
      >
        <CarouselContent>
          <CarouselItem className=" md:basis-1/3">
            <CustomImage
              src={restaurantData.Main_Branch_Info[0].Home_Menu_Photo1}
              alt="menu photo 1"
              ratio="5/4"
            />
          </CarouselItem>
          <CarouselItem className=" md:basis-1/3">
            <CustomImage
              src={restaurantData.Main_Branch_Info[0].Home_Menu_Photo2}
              alt="menu photo 2"
              ratio="5/4"
            />
          </CarouselItem>
          <CarouselItem className=" md:basis-1/3">
            <CustomImage
              src={restaurantData.Main_Branch_Info[0].Home_Menu_Photo3}
              alt="menu photo 3"
              ratio="5/4"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
