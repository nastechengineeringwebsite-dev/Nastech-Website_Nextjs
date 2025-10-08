

import React from "react";
import Container from "./Container";
import Title from "./Title";
import Flex from "./Flex";
import ImageSlider from "./ImageSlider";


const About_Us_Content = () => {
  return (
    <Container>
      <Title className={"lg:mt-10 mt-32"} title={"About Us"} primaryTitle = {true}></Title>
      <Flex
        className={"flex flex-col gap-4 text-text_tertiary font-medium text-justify mb-40"}
      >
        <p>
        NAS Tech Engineering is a forward-thinking engineering solutions and training provider, specializing in CAD/CAM design, CNC programming, CAE, engineering analysis, and hardware design solutions. With over a decade of combined industry experience, we deliver hands-on training and consultancy that bridge the gap between design and production, equipping engineers, technicians, and organizations with practical, industry-ready skills. Our focus spans all types of engineering design solutions, with the purpose of optimizing for Design for Manufacturing (DFM). Leveraging advanced tools, including 3D printing, 3D scanning, and rapid prototyping, we transform ideas into manufacturable, high-quality products while maintaining the highest standards of precision, innovation, and excellence.
        </p>
        <Title className={"lg:mt-10 mt-4"} title={"Some of Our Work"}></Title>
        <ImageSlider imagesLink={["image1.jpg", "image2.jpg"]}></ImageSlider>
      </Flex>
    </Container>
  );
};

export default About_Us_Content;
