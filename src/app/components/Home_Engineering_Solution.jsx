"use client";

import React from "react";
import Container from "./Container";
import Title from "./Title";
import Home_Product_Card from "./Home_Product_Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Flex from "./Flex";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const Home_Engineering_Solution = () => {


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
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
    <section className={"mb-20"}>
      <Container>
        <Title
          title="NAS Tech 360 Engineering Solution"
        ></Title>

        <div className="relative overflow-visible">
         
          <Carousel
            showDots={false}
            responsive={responsive}
            ssr={true}
            transitionDuration={200}
            swipeable={false}
            draggable={false}
            containerClass="flex py-5" // centers whole carousel
            itemClass="px-2"
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            arrows={false}
            
          >
            <Home_Product_Card
              heading={"Product Concept to Prototyping Design "}
              shortDis={`From initial concept to functional prototype, we provide hands-on design and prototyping solutions using CAD/CAM and CNC technologies...`}
              cardImage={"360 Engineering Solutions/Product Design And Prototype/product_design_to_prototype.jpg"}
              pageLink={"nas_360_engineering_solutions/product_concept_to_prototype_design"}
            />
            <Home_Product_Card
              heading={"2D and 3D drawing"}
              shortDis={`NAS Tech Engineering provides precise 2D and 3D drawing services for engineering and manufacturing. Our 2D drawings ensure clear technical...`}
              cardImage={"360 Engineering Solutions/2d to 3d drawing/2d_to_3d_drawing.jpg"}
              pageLink={"nas_360_engineering_solutions/2d_to_3d_design"}
            />
            <Home_Product_Card
              heading={"3D Printing "}
              shortDis={`At into physical prototypes or functional parts. Using cutting-edge additive manufacturing technologies, we produce high-precision...`}
              cardImage={"360 Engineering Solutions/3d Printing/3d_printing.jpg"}
              pageLink={"nas_360_engineering_solutions/3d_printing"}
            />
            <Home_Product_Card
              heading={"3D Scanning "}
              shortDis={`Our 3D scanning services enable accurate reverse engineering, quality inspection, and digital modeling of existing components. By capturing...`}
              cardImage={"360 Engineering Solutions/3d Scanning/3d_scanning.jpg"}
              pageLink={"nas_360_engineering_solutions/3d_scanning"}
            />
            <Home_Product_Card
              heading={"Mold Design , Analysis and Manufacturing"}
              shortDis={`At NAS Tech Engineering, we specialize in mold design, analysis, and manufacturing for a wide range of industrial applications...`}
              cardImage={"360 Engineering Solutions/Mold Design And Analysis/mold_design_and_analysis.jpg"}
              pageLink={"nas_360_engineering_solutions/mold_design_and_analysis"}
            />
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Home_Engineering_Solution;
