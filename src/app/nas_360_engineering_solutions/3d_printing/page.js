import Container from "@/app/components/Container";
import React from "react";
import Service_Content from "@/app/components/Service_Content";
import AnimatePage from "@/app/components/AnimatePage";

export const metadata = {
	title: "3D Printing | Nas Tech Engineering",
	description:
		"Nas Tech Engineering provides hands-on trainning for Advanced learners on industrial grade CAD using Solidworks by our experts with experience on the industry for over 10+ years. ",
	
};

const page = () => {
    
  return (
    <AnimatePage>

    
    <Container>
      <Service_Content
        folder = "3d Printing"
        cover_image = "3d_printing_cover.jpg"
        heading= '3D Printing Service'
        content = "For physical prototypes or functional parts NAS Tech Engineering provides 3D printing services. Using cutting-edge additive manufacturing technologies, we produce high-precision, cost-effective models that help validate designs, test functionality, and accelerate product development. Our 3D printing capabilities support a wide range of materials and complex geometries, enabling innovative solutions across industries."
      ></Service_Content>
    </Container>
    </AnimatePage>
  );
};

export default page;
