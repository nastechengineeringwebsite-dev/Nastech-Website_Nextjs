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
    "Engineering Design Analysis and Simulation: Beginner | Nas Tech Engineering",
  description:
    "Optimize your designs with NAS Tech Engineering in Bangladesh. A beginner course in engineering analysis & simulation using industry tools to predict and improve performance. ",
    openGraph: {
      title: "Engineering Design Analysis and Simulation: Beginner | Nas Tech Engineering",
      description:
        "Optimize your designs with NAS Tech Engineering in Bangladesh. A beginner course in engineering analysis & simulation using industry tools to predict and improve performance.  ",
      url: "https://www.nastechengineeringbd.com/nas_technical_trainning/engineering_design_analysis_and_simulation_beginner",
      siteName: "NAS Tech Engineering",
      images: ["images/website_preview.webp"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Engineering Design Analysis and Simulation: Beginner | Nas Tech Engineering",
      description:
        "Optimize your designs with NAS Tech Engineering in Bangladesh. A beginner course in engineering analysis & simulation using industry tools to predict and improve performance. ",
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
          title={"Engineering Design Analysis and Simulation: Beginner"}
          primaryTitle={true}
        ></Title>
        <Flex
          className={
            "flex flex-col gap-4 text-text_tertiary font-medium text-justify mb-40"
          }
        >
          <p>
            Gain the foundational skills to test your ideas before you build
            them. Our beginner course in Engineering Design Analysis and
            Simulation teaches you how to analyze and predict the performance of
            your designs. Learn to identify potential flaws and optimize your
            concepts using industry-standard tools, preparing you for more
            advanced engineering challenges.
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
