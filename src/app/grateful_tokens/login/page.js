import AnimatePage from "@/app/components/AnimatePage";
import Container from "@/app/components/Container";
import Login from "@/app/components/Login";
import React from "react";

const page = () => {
  return (
    <Container>
      <AnimatePage>
        <Login />
      </AnimatePage>
    </Container>
  );
};

export default page;
