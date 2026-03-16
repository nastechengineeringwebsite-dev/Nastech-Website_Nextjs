"use client";

import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import axios from "axios";
import AddProducts from "./AddProducts";

const AdminPage = () => {
  const router = useRouter();

  let [username, setUsername] = useState(null);
  let [userInfo, setUserInfo] = useState(null);
  let [currrentInfo, setCurrentInfo] = useState(0);

  let { userSignedIn, setUserSignedIn } = useAuth();

  let [infoList, setInfoList] = useState([
    { key: "Add Products", component: <AddProducts /> },
    { key: "Products", component: <AddProducts /> },
    { key: "Orders", component: <AddProducts /> },
    { key: "Users", component: <AddProducts /> },
  ]);

  let logout = async () => {
    await axios.get("/api/logout");
    router.push("/grateful_tokens/login");
    setUserSignedIn(false);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/api/account");
        const user = res.data.data;
        setUserInfo(user);
        setUsername(user.username);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  return (
    <Flex className={"flex flex-col"}>
      <h1 className="text-[30px] text-text_tertiary font-medium my-10">
        Hello {username}
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
              onClick={logout}
            >
              Logout
            </ListItem>
          </List>
          {/* <Flex>
            {infoList.map((item, index) => (
              <Flex>{item.component}</Flex>
            ))}
          </Flex> */}
          <Flex>
            {currrentInfo === 0 && <AddProducts/>}
            
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AdminPage;
