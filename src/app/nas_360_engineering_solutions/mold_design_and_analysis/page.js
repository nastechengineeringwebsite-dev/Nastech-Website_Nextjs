import Container from "@/app/components/Container";
import React from "react";
import Service_Content from "@/app/components/Service_Content";

export const metadata = {
	title: "Mold Design , Analysis and Manufacturing | Nas Tech Engineering",
	description:
		"Nas Tech Engineering provides hands-on trainning for Advanced learners on industrial grade CAD using Solidworks by our experts with experience on the industry for over 10+ years. ",
	
};

const page = () => {
    
  return (
    <Container>
      <Service_Content
        folder = "Mold Design And Analysis"
        cover_image = "mold_design_and_analysis_cover.jpg"
        heading= 'Mold Design , Analysis and Manufacturing'
        content = "Our 3D scanning services enable accurate reverse engineering, quality inspection, and digital modeling of existing components. By capturing precise geometries and dimensions, we convert physical objects into detailed 3D digital models suitable for CAD, simulation, and modification. This technology enhances efficiency, reduces errors, and supports faster product iteration and design optimization."
      ></Service_Content>
    </Container>
  );
};

export default page;
