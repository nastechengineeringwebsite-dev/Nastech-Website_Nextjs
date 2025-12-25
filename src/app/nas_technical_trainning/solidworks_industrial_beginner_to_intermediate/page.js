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
  title:
    "Solidworks Industrial: Beginner to Intermediate | Nas Tech Engineering",
  description:
    "Learn SOLIDWORKS in Bangladesh. Designed for beginners, this training covers core modeling to assembly, enabling you to create accurate, production-ready designs. ",
    openGraph: {
      title: "Solidworks Industrial: Beginner to Intermediate | Nas Tech Engineering",
      description:
        "Learn SOLIDWORKS in Bangladesh. Designed for beginners, this training covers core modeling to assembly, enabling you to create accurate, production-ready designs.",
      url: "https://www.nastechengineeringbd.com/nas_technical_trainning/solidworks_industrial_beginner_to_intermediate",
      siteName: "NAS Tech Engineering",
      images: ["images/website_preview.webp"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Solidworks Industrial: Beginner to Intermediate | Nas Tech Engineering",
      description:
        "Learn SOLIDWORKS in Bangladesh. Designed for beginners, this training covers core modeling to assembly, enabling you to create accurate, production-ready designs.",
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
          title={"Solidworks Industrial: Beginner to Intermediate"}
          primaryTitle={true}
        ></Title>
        <Flex
          className={
            "flex flex-col gap-4 text-text_tertiary font-medium text-justify mb-40"
          }
        >
          <p>
            This course is designed for engineers and designers who are new to
            SOLIDWORKS or have basic experience. Participants will learn core
            modeling techniques, assembly creation, and 2D/3D drawing
            essentials, building a strong foundation in industrial design. By
            the end of the course, learners will be able to create accurate,
            production-ready models and understand best practices for efficient
            design workflows.
          </p>

          <Course_Information
            price="20000 BDT"
            duration="4 Months"
            available_seats={"12"}
            batch_slots={"2"}
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
