import Container from "@/app/components/Container";
import React from "react";
import Service_Content from "@/app/components/Service_Content";
import AnimatePage from "@/app/components/AnimatePage";

export const metadata = {
	title: "Mold Design , Analysis and Manufacturing | Nas Tech Engineering",
	description:
		"Nas Tech Engineering provides hands-on trainning for Advanced learners on industrial grade CAD using Solidworks by our experts with experience on the industry for over 10+ years. ",
	
};

const page = () => {
    
  return (
    <AnimatePage>
    <Container>
      <Service_Content
        folder = "Mold Design And Analysis"
        cover_image = "mold_design_and_analysis_cover.jpg"
        heading= 'Mold Design , Analysis and Manufacturing Service'
        content = "At NAS Tech Engineering, we specialize in mold design, analysis, and manufacturing for a wide range of industrial applications. Our team combines CAD/CAM modeling, engineering analysis (CAE), and precision manufacturing techniques to develop high-quality molds optimized for efficiency, durability, and production performance. We perform thorough mold flow simulations and structural analysis to ensure designs meet manufacturing requirements and minimize defects. From concept to finished mold, our services support rapid prototyping, production-ready tooling, and Design for Manufacturing (DFM) principles, delivering reliable solutions for complex industrial components."
      ></Service_Content>
    </Container>
    </AnimatePage>
  );
};

export default page;
