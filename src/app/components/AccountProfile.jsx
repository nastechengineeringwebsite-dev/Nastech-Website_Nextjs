"use client";

import React, { useState } from "react";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import MyProfile from "./MyProfile";
import MyOrders from "./MyOrders";
import { motion } from "framer-motion";

const AccountProfile = () => {
  let [username, setUsername] = useState("Omar");

  let [currrentInfo, setCurrentInfo] = useState(0);
  let [infoList, setInfoList] = useState([
    { key: "My Profile", component: <MyProfile /> },
    { key: "My Orders", component: <MyOrders /> },
  ]);

  return (
    <Flex className={"flex flex-col"}>
      <h1 className="text-[30px] text-text_tertiary font-medium my-10">
        Welcome back {username}
      </h1>
      <Flex className={"flex mb-20"}>
        <Flex className={"w-full"}>
          <List className={"flex flex-col w-[20%] bg-blue-50"}>
            {infoList.map((item, index) => (
              <ListItem
                key={item.key}
                className={`text-text_secondary font-semibold cursor-pointer  px-10 py-7 relative`}
                onClick={() => setCurrentInfo(index)}
              >
                {currrentInfo === index && (
                  <motion.div
                    layoutId="sidebar-indicator"
                    className="absolute left-0 top-0 w-[4px] h-full bg-blue-400"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                {item.key}
              </ListItem>
            ))}
            <ListItem
              className={
                "text-text_secondary font-semibold cursor-pointer  px-10 py-7 mt-auto"
              }
            >
              Logout
            </ListItem>
          </List>
          <Flex className={""}>{infoList[currrentInfo].component}</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AccountProfile;
