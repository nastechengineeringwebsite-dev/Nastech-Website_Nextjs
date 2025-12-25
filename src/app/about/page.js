import React from "react";
import About_Us_Content from "../components/About_Us_Content";
import AnimatePage from "../components/AnimatePage";

export const metadata = {
  title: "About | Nas Tech Engineering",
  description:
    "NAS Tech Engineering: a leading engineering solutions & training provider in Bangladesh. We bridge design and production with expert CAD/CAM, CNC, and CAE training.",
};

const page = () => {
  return (
    <AnimatePage>
      <About_Us_Content />
    </AnimatePage>
  );
};

export default page;
