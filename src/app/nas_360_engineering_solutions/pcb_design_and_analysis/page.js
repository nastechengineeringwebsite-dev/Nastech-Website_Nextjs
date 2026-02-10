import Container from "@/app/components/Container";
import React from "react";
import Service_Content from "@/app/components/Service_Content";
import AnimatePage from "@/app/components/AnimatePage";

export const metadata = {
  title: "PCB Design And Analysis | Nas Tech Engineering",
  description:
    "NAS Tech Engineering delivers end to end hardware development from 1st to 6th layer PCB design to complete, manufacturing-ready products in Bangladesh.",
    openGraph: {
      title: "PCB Design And Analysis | Nas Tech Engineering",
      description:
        "NAS Tech Engineering delivers end to end hardware development from 1st to 6th layer PCB design to complete, manufacturing-ready products in Bangladesh.",
      url: "https://www.nastechengineeringbd.com/nas_360_engineering_solutions/pcb_design_and_analysis",
      siteName: "NAS Tech Engineering",
      images: ["images/website_preview.webp"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "PCB Design And Analysis | Nas Tech Engineering",
      description:
        "NAS Tech Engineering delivers end to end hardware development from 1st to 6th layer PCB design to complete, manufacturing-ready products in Bangladesh.",
      images: ["images/website_preview.webp"],
    },
};

const page = () => {
  return (
    <AnimatePage>
      <Container>
        <Service_Content
          folder="PCB Design And Analysis"
          cover_image="pcb_design_and_analysis_cover.jpg"
          heading="PCB Design And Analysis"
          content="From 1st to 6th layer PCB design to complete system architecture and full product development, we deliver end to end hardware solutions ready for manufacturing. At NAS Tech Engineering, our expertise covers schematic design, multilayer PCB layout, component selection, prototyping, testing, and validation to ensure reliable and production-ready results."
        ></Service_Content>
      </Container>
    </AnimatePage>
  );
};

export default page;
