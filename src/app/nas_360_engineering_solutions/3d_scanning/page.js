import Container from "@/app/components/Container";
import React from "react";
import Service_Content from "@/app/components/Service_Content";
import AnimatePage from "@/app/components/AnimatePage";

export const metadata = {
	title: "3D Scanning Service | Nas Tech Engineering",
	description:
		"NAS Tech Engineering provides precise 3D scanning services in Bangladesh for reverse engineering, quality control, and creating digital models for CAD and simulation. ",
    openGraph: {
      title: "3D Scanning Service | Nas Tech Engineering",
      description:
        "NAS Tech Engineering provides precise 3D scanning services in Bangladesh for reverse engineering, quality control, and creating digital models for CAD and simulation.",
      url: "https://www.nastechengineeringbd.com/nas_360_engineering_solutions/3d_scanning",
      siteName: "NAS Tech Engineering",
      images: ["images/website_preview.webp"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "3D Scanning Service | Nas Tech Engineering",
      description:
        "NAS Tech Engineering provides precise 3D scanning services in Bangladesh for reverse engineering, quality control, and creating digital models for CAD and simulation.",
      images: ["images/website_preview.webp"],
    },
};

const page = () => {
    
  return (
    <AnimatePage>
    <Container>
      <Service_Content
        folder = "3d Scanning"
        cover_image = "3d_scanning_cover.jpg"
        heading= '3D Scanning Service'
        content = "Our 3D scanning services enable accurate reverse engineering, quality inspection, and digital modeling of existing components. By capturing precise geometries and dimensions, we convert physical objects into detailed 3D digital models suitable for CAD, simulation, and modification. This technology enhances efficiency, reduces errors, and supports faster product iteration and design optimization."
      ></Service_Content>
    </Container>
    </AnimatePage>
  );
};

export default page;
