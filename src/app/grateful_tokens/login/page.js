
import React from "react";
import Container from "../../components/Container";
import AnimatePage from "../../components/AnimatePage";
import Login from "../../components/Login";


const page = () => {
  return (
    <Container>
      <AnimatePage>
        <Login/>
      </AnimatePage>
    </Container>
  );
};

export default page;
