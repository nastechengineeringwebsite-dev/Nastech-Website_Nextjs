import AnimatePage from "@/app/components/AnimatePage";
import Container from "@/app/components/Container";
import GratefulTokensProductInfo from "@/app/components/GratefulTokensProductInfo";
import prisma from "@/app/lib/prisma";
import React from "react";

const page = async ({ params }) => {
    const {id, slug} = await params
    
    const product = await prisma.product.findUnique({where: {id: id}})
  return (
    <Container>
      <AnimatePage>
        <GratefulTokensProductInfo product={product} />
      </AnimatePage>
    </Container>
  );
};

export default page;
