import React from "react";
import Technical_Trainning_Content from "../components/Technical_Trainning_Content";
import AnimatePage from "../components/AnimatePage";

export const metadata = {
  title: "Technical Training Program | Nas Tech Engineering",
  description:
    "Nas Tech Engineering provides hands-on experience and trainning on CAD/CAM, CNC and design anylysis by our experts with experience on the industry for over 10+ years.",
};

const page = () => {
  return (
    <AnimatePage>
      <Technical_Trainning_Content />
    </AnimatePage>
  );
};

export default page;
