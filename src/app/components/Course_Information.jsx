import React from "react";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { GoDot } from "react-icons/go";
import Link from "next/link";

const Course_Information = ({
  duration = "N/A",
  price = "N/A",
  available_seats = "N/A",
  batch_slots = "N/A",
  registration_link,
  status = "N/A",
}) => {
  return (
    <>
    <h2 className="text-text_primary font-bold text-lg mt-10">
          Course Details:
        </h2>
    <List className = {"flex flex-col gap-y-3 "}>
      <ListItem>
        <Flex className="flex items-center gap-x-3">
          <GoDot />
          <span className="text-text_secondary font-semibold w-[150px]">
            Course Duration:
          </span>
          <span>{duration}</span>
        </Flex>
      </ListItem>
      <ListItem>
        <Flex className="flex items-center gap-x-3">
          <GoDot />
          <span className="text-text_secondary font-semibold w-[150px]">
            Course Price:
          </span>
          <span>{price}</span>
        </Flex>
      </ListItem>
      <ListItem>
        <Flex className="flex items-center gap-x-3">
          <GoDot />
          <span className="text-text_secondary font-semibold w-[150px]">
            Available Seats:
          </span>
          <span>{available_seats}</span>
        </Flex>
      </ListItem>
      <ListItem>
        <Flex className="flex items-center gap-x-3">
          <GoDot />
          <span className="text-text_secondary font-semibold w-[150px]">
            Batch Slots:
          </span>
          <span>{batch_slots}</span>
        </Flex>
      </ListItem>
      <ListItem>
        <Flex className="flex items-center gap-x-3">
          <GoDot />
          <span className="text-text_secondary font-semibold w-[150px]">
            Status:
          </span>
          <span>{status}</span>
        </Flex>
      </ListItem>
      <ListItem>
        <Flex className="flex items-center gap-x-3">
          <GoDot />
          <span className="text-text_secondary font-semibold w-[150px]">
            Registration Link:
          </span>
          <span>{registration_link ? <Link href={registration_link} className="underline text-text-primary">Register Here</Link> : "Closed"}</span>
        </Flex>
      </ListItem>
    </List>
    </>
  );
};

export default Course_Information;
