"use client";

import React, { useState } from "react";
import Flex from "./Flex";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import List from "./List";
import ListItem from "./ListItem";
import Image from "next/image";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";

const CartDropDownMenu = ({uid}) => {

  const [showCart, setShowCart] = useState(false);
  const [largeDevice, setLargeDevice] = useState(true);

  let { userSignedIn, setUserSignedIn } = useAuth();

  const items = [
    {
    name: "Bhungchung",
    quantity: 2,
    price: 100,
  }
  ,
  {
    name: "Bhungchung2",
    quantity: 3,
    price: 200,
  }
]

  const findSum = ()=>{
    let sum = 0
    items.map((item)=>{
        sum = sum + (item.price*item.quantity)
    })
    return sum
  }

  let handleShowMenu = (click, state) => {
    
    if (click && !largeDevice) {
      setShowCart(state);
    } else if (!click && largeDevice) {
      setShowCart(state);
    }
    console.log(showCart)
  };

  return (
    <div onMouseEnter={() => {
        handleShowMenu(false, true);
      }}
      onMouseLeave={() => {
        handleShowMenu(false, false);
      }} className="relative ">
      <Flex
        className="flex flex-col text-text_primary font-semibold text-[16px] after:rounded-full relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8] lg:after:bottom-[-5px]
    after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2"
        key={"Shopping cart"}
      >
        <Link href={"/grateful_tokens"}>
          <FaShoppingCart />
        </Link>
        {
            userSignedIn &&
        <Flex className="absolute bg-bg_secondary text-gray-300 font-medium text-sm p-2 rounded-full h-[20px] items-center justify-center top-0 right-0 translate-x-[100%] translate-y-[-50%]">{uid && items ? items.length : 0}</Flex>
        }
      </Flex>
      {items.length > 0 &&
      <Flex className={`flex flex-col absolute bg-slate-200 p-3 rounded-lg left-1/2 top-[30px] translate-x-[-50%] border-gray-400 border-[1px] ${
          showCart
            ? "opacity-100 z-10 lg:top-[30px] max-h-[400px]"
            : "opacity-0 z-[-1] lg:top-16 max-h-0"
        } lg:ease-in-out duration-300 origin-top`}>
      <div className="lg:absolute w-3 h-3 left-1/2 top-0 -translate-x-1/2  -translate-y-1/2 bg-slate-200 rotate-45 lg:block hidden border-gray-400 border-t-[1px] border-l-[1px]"></div>
        <List className={"mt-2 flex flex-col "}>
            {items.map((item,index)=>(

            <ListItem className={'flex items-center gap-x-4 py-4 border-b-2 border-slate-300'}>
                <div className="w-[50px] h-[50px]">

                <Image src={"https://res.cloudinary.com/dwgtixarr/image/upload/v1773728267/o0tnykduitmorppj2nz5.jpg"} width={50} height={50} alt="Product name"/>
                </div>
                <span className="text-slate-800 w-[150px] text-[12px] font-semibold">{item.name}</span>
                <span className="text-slate-800 w-[30px] text-[17px] font-semibold">x{item.quantity}</span>
                <span className="text-slate-800 w-[50px] text-[15px] font-semibold">৳ {item.quantity * item.price}</span>
                <Flex className="w-[20px] h-[20px] bg-bg_tertiary rounded-full items-center justify-center hover:cursor-pointer">

                <span className="text-slate-200 text-[15px] font-semibold">x</span>
                </Flex>
            </ListItem>
            ))}
        </List>
        <Flex className={"flex items-center justify-between mt-5"}>
            <button className="bg-bg_secondary text-gray-300 text-[14px] font-semibold px-3 py-2 rounded-full hover:cursor-pointer">
                <Link href={'/grateful_tokens/checkout'}>
                Checkout
                </Link>
            </button>
            <span className="text-text_tertiary font-semibold text-right pr-10">Subtotal: ৳ {findSum()}</span>
        </Flex>
      </Flex>
      }
    </div>
  );
};

export default CartDropDownMenu;
