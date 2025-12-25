import React from "react";
import About_Us_Content from "../components/About_Us_Content";
import AnimatePage from "../components/AnimatePage";

export const metadata = {
  title: "About | Nas Tech Engineering",
  description:
    "NAS Tech Engineering: a leading engineering solutions & training provider in Bangladesh. We bridge design and production with expert CAD/CAM, CNC, and CAE training.",

  openGraph: {
    title: "About | Nas Tech Engineering",
    description:
      "NAS Tech Engineering: a leading engineering solutions & training provider in Bangladesh. We bridge design and production with expert CAD/CAM, CNC, and CAE training.",
    url: "https://www.nastechengineeringbd.com/about",
    siteName: "NAS Tech Engineering",
    images: ["images/website_preview.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Nas Tech Engineering",
    description:
      "NAS Tech Engineering: a leading engineering solutions & training provider in Bangladesh. We bridge design and production with expert CAD/CAM, CNC, and CAE training.",
    images: ["images/website_preview.webp"],
  },
};

const page = () => {
  return (
    <AnimatePage>
      <About_Us_Content />
    </AnimatePage>
  );
};

export default page;
