import React from "react";
import Title from "./Title";
import Container from "./Container";
import Button from "./Button";
import Flex from "./Flex";

const Home_About_Us = () => {
  return (
    <>
      <Container>
        <section>
          <Title title="About Us" className={"mt-10 lg:mt-0"}></Title>
          <p className="text-justify text-text_tertiary text-[15px] lg:text-[17px]">
          NAS Tech Engineering is a forward-thinking engineering solutions and training provider, specializing in CAD/CAM design, CNC programming, CAE, engineering analysis, and hardware design solutions. With over a decade of combined industry experience, we deliver hands-on training and consultancy that bridge the gap between design and production, equipping engineers, technicians, and organizations with practical, industry-ready skills. Our focus spans all types of engineering design solutions, with the purpose of optimizing for Design for Manufacturing (DFM). Leveraging advanced tools, including 3D printing, 3D scanning, and rapid prototyping, we transform ideas into manufacturable, high-quality products while maintaining the highest standards of precision, innovation, and excellence.
          </p>
          <Flex className={"mt-10 justify-center flex items-center"}>
            <Button link={"/about"}>Read More</Button>
          </Flex>
        </section>
      </Container>
    </>
  );
};

export default Home_About_Us;
