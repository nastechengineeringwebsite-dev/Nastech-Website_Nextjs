import React from "react";
import Nas_360_Solutions_Content from "../components/Nas_360_Solutions_Content";
import AnimatePage from "../components/AnimatePage";

export const metadata = {
  title: "NAS Tech 360 Solutions | Nas Tech Engineering",
  description:
    "From idea to prototype: NAS Tech Engineering in Bangladesh provides 3D printing, 3D scanning, mold design, and product design services for seamless manufacturing.",
    openGraph: {
      title: "NAS Tech 360 Solutions | Nas Tech Engineering",
      description:
        "From idea to prototype: NAS Tech Engineering in Bangladesh provides 3D printing, 3D scanning, mold design, and product design services for seamless manufacturing.",
      url: "https://www.nastechengineeringbd.com/nas_360_engineering_solutions",
      siteName: "NAS Tech Engineering",
      images: ["images/website_preview.webp"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "NAS Tech 360 Solutions | Nas Tech Engineering",
      description:
        "From idea to prototype: NAS Tech Engineering in Bangladesh provides 3D printing, 3D scanning, mold design, and product design services for seamless manufacturing.",
      images: ["images/website_preview.webp"],
    },
};
const page = () => {
  return (
    <AnimatePage>
      <Nas_360_Solutions_Content />
    </AnimatePage>
  );
};

export default page;
