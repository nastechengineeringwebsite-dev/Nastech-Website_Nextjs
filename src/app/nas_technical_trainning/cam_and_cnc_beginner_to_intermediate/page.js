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
  title: "CAM and CNC: Beginner to Intermediate | Nas Tech Engineering",
  description:
    "Nas Tech Engineering provides hands-on trainning for Advanced learners on industrial grade CAD using Solidworks by our experts with experience on the industry for over 10+ years. ",
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
          title={"CAM and CNC: Beginner to Intermediate"}
          primaryTitle={true}
        ></Title>
        <Flex
          className={
            "flex flex-col gap-4 text-text_tertiary font-medium text-justify mb-40"
          }
        >
          <p>
            Start your journey from digital design to physical reality. This
            course provides a hands-on foundation in Computer-Aided
            Manufacturing (CAM) and Computer Numerical Control (CNC). Learn the
            essential skills to prepare designs for milling, routing, and
            fabrication. Build confidence with practical, project-based learning
            in a small-group setting.
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
