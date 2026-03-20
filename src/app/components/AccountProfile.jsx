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

const AccountProfile = ({user, order}) => {

  const router = useRouter()

  let [username, setUsername] = useState(user.username);

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


  return (
    <Flex className={"flex flex-col lg:mt-0 mt-32"}>
      <h1 className="lg:text-[30px] text-[20px] text-text_tertiary font-medium my-10">
        Welcome back {username}
      </h1>
      <Flex className={"flex mb-20"}>
        <Flex className={"flex w-full lg:flex-row flex-col"}>
          <List className={"flex lg:flex-col flex-row lg:w-[20%] bg-blue-50"}>
            {infoList.map((item, index) => (
              <ListItem
                key={item.key}
                className={`text-text_secondary font-semibold cursor-pointer lg:px-10 lg:py-7 px-3 py-2 relative pt-3`}
                onClick={() => setCurrentInfo(index)}
              >
                {currrentInfo === index && (
                  <motion.div
                    layoutId="sidebar-indicator"
                    className="absolute left-0 top-0 lg:w-[4px] w-full lg:h-full h-[2px] bg-blue-400"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                {item.key}
              </ListItem>
            ))}
            <ListItem
              className={
                "text-text_secondary font-semibold cursor-pointer lg:px-10 lg:py-4 px-3 py-1 mb-2 mt-2 mr-2 ml-auto lg:mt-auto lg:mx-4 lg:mb-4 bg-blue-200 rounded-2xl "
              }
              onClick = {logout}
            >
              Logout
            </ListItem>
          </List>
          <Flex>
            {currrentInfo === 0 && <MyProfile userInfo={user} />}
            {currrentInfo === 1 && <MyOrders userInfo={order} />}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AccountProfile;
