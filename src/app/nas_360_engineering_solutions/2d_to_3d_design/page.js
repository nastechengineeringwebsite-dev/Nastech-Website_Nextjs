import Container from "@/app/components/Container";
import React from "react";
import Service_Content from "@/app/components/Service_Content";
import AnimatePage from "@/app/components/AnimatePage";

export const metadata = {
	title: "2D and 3D drawing Service | Nas Tech Engineering",
	description:
		"Nas Tech Engineering provides hands-on trainning for Advanced learners on industrial grade CAD using Solidworks by our experts with experience on the industry for over 10+ years. ",
	
};

const page = () => {
    
  return (
    <AnimatePage>
    <Container>
      <Service_Content
        folder = "2d to 3d drawing"
        cover_image = "2d_to_3d_drawing_cover.jpg"
        heading= '2D and 3D Drawing Service'
        content = "NAS Tech Engineering provides precise 2D and 3D drawing services for engineering and manufacturing. Our 2D drawings ensure clear technical communication, while 3D models enable visualization, simulation, and virtual testing. Using industry-standard tools, we deliver accurate, production-ready designs that meet international standards, accelerate prototyping, and streamline NAS Tech Engineering, we offer advanced 3D printing services to rapidly turn designs the transition from concept to manufacturing"
      ></Service_Content>
    </Container>
    </AnimatePage>
  );
};

export default page;
