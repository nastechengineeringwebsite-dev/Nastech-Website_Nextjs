import AnimatePage from "@/app/components/AnimatePage";
import Container from "@/app/components/Container";
import GratefulTokensProductInfo from "@/app/components/GratefulTokensProductInfo";
import React from "react";

const page = async ({ params }) => {
    const {id, slug} = await params
    console.log(id, slug)
  return (
    <Container>
      <AnimatePage>
        <GratefulTokensProductInfo id = {id} />
      </AnimatePage>
    </Container>
  );
};

export default page;
