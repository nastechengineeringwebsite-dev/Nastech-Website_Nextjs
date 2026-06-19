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
  title: "Industrial PCB Design & Manufacturing | Nas Tech Engineering",
  description:
    "Master industrial PCB design from datasheets to fabrication. Learn DipTrace layout, double-layer routing, DFM rules, and export Gerber files for JLCPCB.",
  openGraph: {
    title: "Industrial PCB Design & Manufacturing | Nas Tech Engineering",
    description:
      "Master industrial PCB design from datasheets to fabrication. Learn DipTrace layout, double-layer routing, DFM rules, and export Gerber files for JLCPCB.",
    url: "https://www.nastechengineeringbd.com/nas_technical_trainning/industrial_pcb_design_manufacturing",
    siteName: "NAS Tech Engineering",
    images: ["images/website_preview.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial PCB Design & Manufacturing | Nas Tech Engineering",
    description:
      "Master industrial PCB design from datasheets to fabrication. Learn DipTrace layout, double-layer routing, DFM rules, and export Gerber files for JLCPCB.",
    images: ["images/website_preview.webp"],
  },
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
          title={"Industrial PCB Design & Manufacturing(Online Course)"}
          primaryTitle={true}
        ></Title>
        <Flex
          className={
            "flex flex-col gap-4 text-text_tertiary font-medium text-justify mb-40"
          }
        >
          <p>
            This course bridges the gap between academic electronics and
            professional hardware engineering. Students will be able to master
            the complete industrial design flow from component selection and
            schematic capture to Design for Manufacturing (DFM) and final
            fabrication.
          </p>

          <p>
            <b>Course Contents:</b>
            <List className={"flex flex-col mt-3"}>
              <ListItem className="flex items-center mt-2">
                <div className="w-2 h-2 rounded-full bg-text_secondary mr-5"></div>
                <p>
                  Step-by-step product development from concept to final
                  hardware
                </p>
              </ListItem>
              <ListItem className="flex items-center mt-2">
                <div className="w-2 h-2 rounded-full bg-text_secondary mr-5"></div>
                <p>
                  Evaluating design constraints and benchmarking hardware using Evaluation Modules
                </p>
              </ListItem>
              <ListItem className="flex items-center mt-2">
                <div className="w-2 h-2 rounded-full bg-text_secondary mr-5"></div>
                <p>
                  Navigating professional EDA software for schematic capture and PCB layout
                </p>
              </ListItem>
              <ListItem className="flex items-center mt-2">
                <div className="w-2 h-2 rounded-full bg-text_secondary mr-5"></div>
                <p>
                  Making custom schematic symbols and precise footprints directly from datasheets
                </p>
              </ListItem>
              <ListItem className="flex items-center mt-2">
                <div className="w-2 h-2 rounded-full bg-text_secondary mr-5"></div>
                <p>
                  Efficiently importing netlists and transitioning designs to the board layout stage
                </p>
              </ListItem>
              <ListItem className="flex items-center mt-2">
                <div className="w-2 h-2 rounded-full bg-text_secondary mr-5"></div>
                <p>
                  Tracing and arranging components efficiently using single and double-layer routing
                </p>
              </ListItem>
              <ListItem className="flex items-center mt-2">
                <div className="w-2 h-2 rounded-full bg-text_secondary mr-5"></div>
                <p>
                  Designing power and signal paths with appropriate via placements and track widths.
                </p>
              </ListItem>
              <ListItem className="flex items-center mt-2">
                <div className="w-2 h-2 rounded-full bg-text_secondary mr-5"></div>
                <p>
                  Generating 3D PCB models for mechanical clearance and adding clear silkscreen labels.
                </p>
              </ListItem>
              <ListItem className="flex items-center mt-2">
                <div className="w-2 h-2 rounded-full bg-text_secondary mr-5"></div>
                <p>
                  Deep dive into clearances, solder mask limits, and constraints to ensure error-free production.
                </p>
              </ListItem>
              <ListItem className="flex items-center mt-2">
                <div className="w-2 h-2 rounded-full bg-text_secondary mr-5"></div>
                <p>
                  Case study on designing rugged, compact PCBs for sensors, power, and telemetry.
                </p>
              </ListItem>
              <ListItem className="flex items-center mt-2">
                <div className="w-2 h-2 rounded-full bg-text_secondary mr-5"></div>
                <p>
                  Applying specific manufacturer design rules and running automated Design Rule Checks (DRC).
                </p>
              </ListItem>
              <ListItem className="flex items-center mt-2">
                <div className="w-2 h-2 rounded-full bg-text_secondary mr-5"></div>
                <p>
                  Exporting production-ready Gerber files, NC Drill files, and fabrication data.
                </p>
              </ListItem>
              <ListItem className="flex items-center mt-2">
                <div className="w-2 h-2 rounded-full bg-text_secondary mr-5"></div>
                <p>
                 Verification procedures and sign-off protocols for seamless JLCPCB manufacturing submission.
                </p>
              </ListItem>
            </List>
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
