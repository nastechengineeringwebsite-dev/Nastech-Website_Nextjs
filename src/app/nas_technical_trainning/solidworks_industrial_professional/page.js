import Container from "@/app/components/Container";
import Flex from "@/app/components/Flex";
import List from "@/app/components/List";
import Title from "@/app/components/Title";
import { ListItem } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import Course_Information from "@/app/components/Course_Information";
import AnimatePage from "@/app/components/AnimatePage";

export const metadata = {
  title: "Solidworks Industrial: Professional | Nas Tech Engineering",
  description:
    "For engineers seeking expert-level proficiency: NAS Tech Engineering's professional SOLIDWORKS training in Bangladesh covers CAE, DFM, and full-scale product design. ",
    openGraph: {
      title: "Solidworks Industrial: Professional | Nas Tech Engineering",
      description:
        "For engineers seeking expert-level proficiency: NAS Tech Engineering's professional SOLIDWORKS training in Bangladesh covers CAE, DFM, and full-scale product design.",
      url: "https://www.nastechengineeringbd.com/nas_technical_trainning/solidworks_industrial_professional",
      siteName: "NAS Tech Engineering",
      images: ["images/website_preview.webp"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Solidworks Industrial: Professional | Nas Tech Engineering",
      description:
        "For engineers seeking expert-level proficiency: NAS Tech Engineering's professional SOLIDWORKS training in Bangladesh covers CAE, DFM, and full-scale product design.",
      images: ["images/website_preview.webp"]},
};

const page = () => {
  return (
    <AnimatePage>
      <Container>
        <Flex
          className={
            "flex mt-30 lg:mt-10 items-center  font-bold text-darker_blue text-[14px] gap-1"
          }
        >
          <Link href={"/nas_technical_trainning"}>
            <HiArrowSmLeft className="h-8 w-8 p-1 bg-[#d2deeb] rounded-full " />
          </Link>
        </Flex>
        <Title
          className={"mt-10"}
          title={"Solidworks Industrial: Professional"}
          primaryTitle={true}
        ></Title>
        <Flex
          className={
            "flex flex-col gap-4 text-text_tertiary font-medium text-justify mb-40"
          }
        >
          <p>
            Our professional-level course is tailored for engineers seeking
            expert mastery in SOLIDWORKS Industrial applications. It focuses on
            full-scale product design, integrated CAE analysis, advanced
            assembly management, and preparation for Design for Manufacturing
            (DFM). Participants gain hands-on experience in tackling real-world
            industrial projects, equipping them to deliver high-quality,
            manufacturable designs with efficiency and precision.
          </p>

          <Course_Information
            //   duration={"TBD"}
            //   price={""}
            available_seats={"12"}
            batch_slots={"1"}
            status="Ended"
          />

          <p className={"mt-10"}>
            For any further queries, feel free to{" "}
            <span>
              <Link href="/contact" className="underline text-text_secondary">
                contact us
              </Link>
            </span>{" "}
            .
          </p>
        </Flex>
      </Container>
    </AnimatePage>
  );
};

export default page;
