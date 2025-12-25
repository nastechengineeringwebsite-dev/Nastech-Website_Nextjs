import Container from "@/app/components/Container";
import React from "react";
import Service_Content from "@/app/components/Service_Content";
import AnimatePage from "@/app/components/AnimatePage";

export const metadata = {
  title: "Product Design to Prototyping Design | Nas Tech Engineering",
  description:
    "From concept to functional prototype with NAS Tech Engineering in Bangladesh. We provide hands-on CAD/CAM & CNC solutions for faster, high-quality product development. ",
};

const page = () => {
  return (
    <AnimatePage>
      <Container>
        <Service_Content
          folder="Product Design And Prototype"
          cover_image="product_design_to_prototype_cover.jpg"
          heading="Product Design to Prototyping Design"
          content="From initial concept to functional prototype, we provide hands-on design and prototyping solutions using CAD/CAM and CNC technologies, enabling faster, high-quality product development."
        ></Service_Content>
      </Container>
    </AnimatePage>
  );
};

export default page;
