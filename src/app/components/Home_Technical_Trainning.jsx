"use client";

import React from "react";
import Container from "./Container";
import Title from "./Title";
import Home_Product_Card from "./Home_Product_Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Flex from "./Flex";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const Home_Technical_Trainning = () => {

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
              title="NAS Tech Technical Training  Program"
              className={"mt-10 lg:mt-0"}
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
                  heading={"SOLIDWORKS Industrial: Beginner to Intermediate"}
                  shortDis={`This course is designed for engineers and designers who are new to SOLIDWORKS or have basic experience. Participants will learn core modeling techniques...`}
                  cardImage={"Technical Solutions/solidworks_industrial_beginnar_to_intermediate.jpg"}
                  pageLink={"nas_technical_trainning/solidworks_industrial_beginner_to_intermediate"}
                />
                <Home_Product_Card
                  heading={"SOLIDWORKS Industrial:Advanced Learning "}
                  shortDis={`This advanced program is for professionals looking to enhance their SOLIDWORKS skills and tackle more complex design challenges...`}
                  cardImage={"Technical Solutions/solidworks_industrial_advanced_learning.jpg"}
                  pageLink={"charting_saturns_secrets_webinar"}
                />
                <Home_Product_Card
                  heading={"SOLIDWORKS Industrial: Professional"}
                  shortDis={`Our professional-level course is tailored for engineers seeking expert mastery in SOLIDWORKS Industrial applications. It focuses on full-scale product design...`}
                  cardImage={"Technical Solutions/solidworks_industrial_professional.jpg"}
                  pageLink={"charting_saturns_secrets_webinar"}
                />
                <Home_Product_Card
                  heading={"SOLIDWORKS Industrial: Expert "}
                  shortDis={`Master the most complex design challenges. Our expert-level course moves beyond standard modeling to cover advanced surfacing, complex assembly design...`}
                  cardImage={"Technical Solutions/solidworks_industrial_expert.jpg"}
                  pageLink={"charting_saturns_secrets_webinar"}
                />
                <Home_Product_Card
                  heading={"CAM and CNC: Beginner to Intermediate"}
                  shortDis={`Start your journey from digital design to physical reality. This course provides a hands-on foundation in Computer-Aided Manufacturing (CAM) and...`}
                  cardImage={"Technical Solutions/cam_and_cnc_beginner_to_industrial.jpg"}
                  pageLink={"charting_saturns_secrets_webinar"}
                />
                <Home_Product_Card
                  heading={"CAM and CNC: Professional"}
                  shortDis={`Optimize your workflow for precision and production. Our professional-level training focuses on advanced CAM and CNC techniques...`}
                  cardImage={"Technical Solutions/cam_and_cnc_professional.jpg"}
                  pageLink={"charting_saturns_secrets_webinar"}
                />
                <Home_Product_Card
                  heading={"Beginner to Intermediate Advance Learning+ Beginner to Intermediate CAM"}
                  shortDis={`Start your fabrication journey with our comprehensive Beginner to Intermediate CAM course. Learn the essential skills to take your ...`}
                  cardImage={"Technical Solutions/cam_and_cnc_advance.jpg"}
                  pageLink={"charting_saturns_secrets_webinar"}
                />
                <Home_Product_Card
                  heading={"Professional All"}
                  shortDis={`Achieve total expertise with our all-inclusive Professional All training. This comprehensive program combines advanced design, analysis...`}
                  cardImage={"Technical Solutions/professional_all.jpg"}
                  pageLink={"charting_saturns_secrets_webinar"}
                />
                <Home_Product_Card
                  heading={"Engineering Design Analysis and Simulation: Beginner"}
                  shortDis={`Gain the foundational skills to test your ideas before you build them. Our beginner course in Engineering Design Analysis and Simulation...`}
                  cardImage={"Technical Solutions/engineering_design_analysis_beginnar.jpg"}
                  pageLink={"charting_saturns_secrets_webinar"}
                />
                {/* <Home_Product_Card
                  heading={"Engineering Design Analysis and Simulation: Intermediate  "}
                  shortDis={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula commodo leo in sodales. Quisque sed lorem quis leo facilisis mattis eu ac elit.`}
                  cardImage={"3d Printing.jpg"}
                  pageLink={"charting_saturns_secrets_webinar"}
                />
                <Home_Product_Card
                  heading={"Engineering Design Analysis and Simulation: Advanced  "}
                  shortDis={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula commodo leo in sodales. Quisque sed lorem quis leo facilisis mattis eu ac elit.`}
                  cardImage={"3d Printing.jpg"}
                  pageLink={"charting_saturns_secrets_webinar"}
                />
                <Home_Product_Card
                  heading={"Microcontroller and PCB: Beginner "}
                  shortDis={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula commodo leo in sodales. Quisque sed lorem quis leo facilisis mattis eu ac elit.`}
                  cardImage={"3d Printing.jpg"}
                  pageLink={"charting_saturns_secrets_webinar"}
                />
                <Home_Product_Card
                  heading={"Microcontroller and PCB: Intermediate "}
                  shortDis={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula commodo leo in sodales. Quisque sed lorem quis leo facilisis mattis eu ac elit.`}
                  cardImage={"3d Printing.jpg"}
                  pageLink={"charting_saturns_secrets_webinar"}
                /> */}
              </Carousel>
            </div>
          </Container>
        </section>
      )
}

export default Home_Technical_Trainning