import React from "react";
import Container from "../../components/Container";
import AnimatePage from "../../components/AnimatePage";
import AdminLogin from "../../components/AdminLogin";



const page = () => {
  return (
    <Container>
      <AnimatePage>
        <AdminLogin/>
      </AnimatePage>
    </Container>
  );
};

export default page;
