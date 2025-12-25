import React from "react";
import Nas_360_Solutions_Content from "../components/Nas_360_Solutions_Content";
import AnimatePage from "../components/AnimatePage";

export const metadata = {
  title: "NAS Tech 360 Solutions | Nas Tech Engineering",
  description:
    "From idea to prototype: NAS Tech Engineering in Bangladesh provides 3D printing, 3D scanning, mold design, and product design services for seamless manufacturing.",
};
const page = () => {
  return (
    <AnimatePage>
      <Nas_360_Solutions_Content />
    </AnimatePage>
  );
};

export default page;
