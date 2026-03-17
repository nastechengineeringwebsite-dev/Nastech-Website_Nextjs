import React from "react";
import AnimatePage from "@/app/components/AnimatePage";
import Container from "@/app/components/Container";
import CheckoutInfo from "@/app/components/CheckoutInfo";


const page = () => {
  
  return (
    <Container>
      <AnimatePage>
        <CheckoutInfo/>
      </AnimatePage>
    </Container>
  );
};

export default page;
