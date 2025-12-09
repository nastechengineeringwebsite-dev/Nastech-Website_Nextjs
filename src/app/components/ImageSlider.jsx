"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import Image from "next/image";

const ImageSlider = ({ imagesLink, folder, image_names }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const ButtonGroup = ({ next, previous, carouselState }) => {
    const { currentSlide, totalItems, slidesToShow } = carouselState;
    const isFirst = currentSlide === 0;
    const isLast = currentSlide >= totalItems - slidesToShow;

    return (
      <div className="carousel-button-group absolute top-1/2 w-full">
        {/* Prev Button */}
        <button
          onClick={() => previous()}
          disabled={isFirst}
          className={`absolute left-0 lg:-left-10 top-1/2 transform -translate-y-1/2 z-10 ${
            isFirst ? "opacity-20 cursor-default" : "cursor-pointer"
          }`}
        >
          <div className="p-1 md:p-3 bg-bg_secondary rounded-full shadow-around">
            <HiArrowNarrowLeft className="text-white lg:w-6 lg:h-6 w-5 h-5" />
          </div>
        </button>

        {/* Next Button */}
        <button
          onClick={() => next()}
          disabled={isLast}
          className={`absolute right-0 lg:-right-10 top-1/2 transform -translate-y-1/2 z-10 ${
            isLast ? "opacity-20 cursor-default" : "cursor-pointer"
          }`}
        >
          <div className="p-1 md:p-3 bg-bg_secondary rounded-full shadow-around">
            <HiArrowNarrowRight className="text-white lg:w-6 lg:h-6 w-5 h-5" />
          </div>
        </button>
      </div>
    );
  };

  return (
    <div className="relative overflow-visible">
      <Carousel
        showDots={false}
        responsive={responsive}
        ssr={true}
        transitionDuration={200}
        swipeable={false}
        draggable={false}
        containerClass="flex py-5" // centers whole carousel
        itemClass="px-10"
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        arrows={false}
      >
        {imagesLink.map((link, index) => {
          return (
            <Image
              key={index}
              src={`/images/image1.jpg`}
              alt={image_names}
              width={1000}
              height={700}
              className="w-full h-full object-cover rounded-lg"
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
