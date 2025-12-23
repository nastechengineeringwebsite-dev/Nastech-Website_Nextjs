import Container from "@/app/components/Container";
import Flex from "@/app/components/Flex";
import List from "@/app/components/List";
import Title from "@/app/components/Title";
import { ListItem } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import Course_Information from "@/app/components/Course_Information";

export const metadata = {
	title: "Solidworks Industrial: Advanced Learning | Nas Tech Engineering",
	description:
		"Nas Tech Engineering provides hands-on trainning for Advanced learners on industrial grade CAD using Solidworks by our experts with experience on the industry for over 10+ years. ",
	
};

const page = () => {
  return (
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
        title={"Solidworks Industrial: Advanced Learning"}
        primaryTitle={true}
      ></Title>
      <Flex
        className={
          "flex flex-col gap-4 text-text_tertiary font-medium text-justify mb-40"
        }
      >
        <p>
        This advanced program is for professionals looking to enhance their SOLIDWORKS skills and tackle more complex design challenges. The course covers surface modeling, advanced assemblies, simulation basics, and design optimization, enabling participants to create sophisticated models and perform preliminary engineering analysis. It bridges the gap between intermediate skills and professional-level design proficiency.
        </p>

        <Course_Information
        //   duration={"TBD"}
        //   price={""}
          available_seats={"12"}
          batch_slots={"1"}
          status="Ended"
          
        />

        <p className = {"mt-10"}>For any further queries, feel free to <span><Link href="/contact" className="underline text-text_secondary">contact us</Link></span> .</p>
      </Flex>
    </Container>
  );
};

export default page;
