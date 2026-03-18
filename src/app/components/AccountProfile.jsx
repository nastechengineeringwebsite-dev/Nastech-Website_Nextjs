"use client";

import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import MyProfile from "./MyProfile";
import MyOrders from "./MyOrders";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const AccountProfile = () => {

  const router = useRouter()

  let [username, setUsername] = useState(null);
  let [userInfo, setUserInfo] = useState(null)
  let [currrentInfo, setCurrentInfo] = useState(0);

  let {userSignedIn, setUserSignedIn} = useAuth()

  let {cartItems, setCartItems} = useCart()

  let [infoList, setInfoList] = useState([
    { key: "My Profile" },
    { key: "My Orders" },
  ])


  let logout = async ()=>{
    await axios.get('/api/logout')
    router.push("/grateful_tokens/login")
    setUserSignedIn(false)
    setCartItems([])
  }

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/api/account");
        const user = res.data.data;
        setUserInfo(user)
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
              onClick = {logout}
            >
              Logout
            </ListItem>
          </List>
          <Flex>
            {currrentInfo === 0 && userInfo && <MyProfile userInfo={userInfo} />}
            {currrentInfo === 1 && userInfo && <MyOrders userInfo={userInfo} />}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AccountProfile;
