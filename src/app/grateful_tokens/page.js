export const revalidate = 10;

import React from "react";
import AnimatePage from "../components/AnimatePage";
import Flex from "../components/Flex";
import Image from "next/image";
import Container from "../components/Container";
import GratefulTokenProducts from "../components/GratefulTokenProducts";
import prisma from "../lib/prisma";

export const metadata = {
  title: "Grateful Tokens | Nas Tech Engineering",
  description:
    "Reach us at NAS Tech Engineering for any queries or suggestions. We are here to help you with your engineering needs.",
  openGraph: {
    title: "Contact Us | Nas Tech Engineering",
    description:
      "Reach us at NAS Tech Engineering for any queries or suggestions. We are here to help you with your engineering needs.",
    url: "https://www.nastechengineeringbd.com/contact",
    siteName: "NAS Tech Engineering",
    images: ["images/website_preview.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Nas Tech Engineering",
    description:
      "Reach us at NAS Tech Engineering for any queries or suggestions. We are here to help you with your engineering needs.",
    images: ["images/website_preview.webp"],
  },
};



const page = async () => {

  const products = await prisma.product.findMany()

  return (
    <Container>
      <AnimatePage>
        <Flex className={"flex flex-col mb-20 lg:mt-0 mt-40"}>
          <Image
            src={"/images/GratefulTokens/banner.jpg"}
            alt={"Grateful Tokens Cover Page"}
            className={"lg:rounded-b-3xl lg:rounded-t-none rounded-2xl"}
            height={500}
            width={1920}
          ></Image>
          <h2 className="mx-auto font-bold text-text_secondary lg:text-4xl text-2xl lg:mt-30 mt-20 relative after:absolute after:translate-x-[-50%] after:translate-y-[50%] after:left-1/2 after:bottom-[-20px] lg:after:w-[400px] after:w-[200px] lg:after:h-[4px] after:h-[3px] after:bg-slate-300 after:rounded-3xl">
            Products of Grateful Tokens
          </h2>
          <GratefulTokenProducts products={products}/>
        </Flex>
      </AnimatePage>
    </Container>
  );
};

export default page;
