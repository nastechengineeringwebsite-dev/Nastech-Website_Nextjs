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
  title: "CAM and CNC: Professional | Nas Tech Engineering",
  description:
    "Elevate your CAM & CNC practice in Bangladesh. NAS Tech Engineering's professional training covers multi-axis machining and tool path optimization for complex components.",
    openGraph: {
      title: "CAM and CNC: Professional | Nas Tech Engineering",
      description:
        "Elevate your CAM & CNC practice in Bangladesh. NAS Tech Engineering's professional training covers multi-axis machining and tool path optimization for complex components.",
      url: "https://www.nastechengineeringbd.com/nas_technical_trainning/cam_and_cnc_professional",
      siteName: "NAS Tech Engineering",
      images: ["images/website_preview.webp"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "CAM and CNC: Professional | Nas Tech Engineering",
      description:
        "Elevate your CAM & CNC practice in Bangladesh. NAS Tech Engineering's professional training covers multi-axis machining and tool path optimization for complex components.",
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
          title={"CAM and CNC: Professional"}
          primaryTitle={true}
        ></Title>
        <Flex
          className={
            "flex flex-col gap-4 text-text_tertiary font-medium text-justify mb-40"
          }
        >
          <p>
            Optimize your workflow for precision and production. Our
            professional-level training focuses on advanced CAM and CNC
            techniques, including multi-axis machining, tool path optimization,
            and material-specific strategies. Gain the skills to increase
            efficiency, reduce waste, and produce complex, high-quality
            components. Elevate your practice with industrial-grade expertise.
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
