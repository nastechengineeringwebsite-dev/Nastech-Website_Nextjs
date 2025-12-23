import Container from "@/app/components/Container";
import React from "react";
import Service_Content from "@/app/components/Service_Content";

export const metadata = {
	title: "Product Design to Prototyping Design | Nas Tech Engineering",
	description:
		"Nas Tech Engineering provides hands-on trainning for Advanced learners on industrial grade CAD using Solidworks by our experts with experience on the industry for over 10+ years. ",
	
};

const page = () => {
    
  return (
    <Container>
      <Service_Content
        folder = "Product Design And Prototype"
        cover_image = "product_design_to_prototype_cover.jpg"
        heading= 'Product Design to Prototyping Design'
        content = "From initial concept to functional prototype, we provide hands-on design and prototyping solutions using CAD/CAM and CNC technologies, enabling faster, high-quality product development."
      ></Service_Content>
    </Container>
  );
};

export default page;
