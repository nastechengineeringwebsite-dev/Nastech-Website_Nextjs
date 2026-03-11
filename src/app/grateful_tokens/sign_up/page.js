import React from "react";
import AnimatePage from "../../components/AnimatePage";
import Container from "../../components/Container";
import Signup from "@/app/components/Signup";


const page = () => {

  

  return (
    <Container>
      <AnimatePage>
        <Signup/>
      </AnimatePage>
    </Container>
  );
};

export default page;
