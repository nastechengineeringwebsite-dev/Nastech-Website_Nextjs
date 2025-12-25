import React from "react";
import Technical_Trainning_Content from "../components/Technical_Trainning_Content";
import AnimatePage from "../components/AnimatePage";

export const metadata = {
  title: "Technical Training Program | Nas Tech Engineering",
  description:
    "Master SolidWorks, CAM & CNC from beginner to expert. NAS Tech Engineering in Bangladesh offers structured industrial training, simulation, and professional certification.",
    openGraph: {
      title: "Technical Training Program | Nas Tech Engineering",
      description:
        "Master SolidWorks, CAM & CNC from beginner to expert. NAS Tech Engineering in Bangladesh offers structured industrial training, simulation, and professional certification.",
      url: "https://www.nastechengineeringbd.com/nas_technical_trainning",
      siteName: "NAS Tech Engineering",
      images: ["images/website_preview.webp"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Technical Training Program | Nas Tech Engineering",
      description:
        "Master SolidWorks, CAM & CNC from beginner to expert. NAS Tech Engineering in Bangladesh offers structured industrial training, simulation, and professional certification.",
      images: ["images/website_preview.webp"]},
};

const page = () => {
  return (
    <AnimatePage>
      <Technical_Trainning_Content />
    </AnimatePage>
  );
};

export default page;
