"use client";

import React, { useState } from "react";
import Flex from "./Flex";
import Image from "next/image";
import { LuCirclePlus } from "react-icons/lu";
import { LuCircleMinus } from "react-icons/lu";
import { HiArrowSmLeft } from "react-icons/hi";
import Button from "./Button";
import Link from "next/link";

const GratefulTokensProductInfo = ({ id }) => {
  const [quantity, setQuantity] = useState(1);
  const handleManualValue = (e) => {
    let val = e.target.value;
    if (val <= 99) {
      setQuantity(val);
    }
    if (e.target.value === "") {
      setQuantity(1);
    }
  };

  const increaseVal = () => {
    if (quantity <= 98) {
      setQuantity(quantity + 1);
    }
  };
  const decreaseVal = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Flex className={"flex flex-col mb-60"}>
      <Flex
        className={
          "flex mt-36 md:mt-32 lg:mt-10 items-center  font-bold text-darker_blue text-[14px] gap-1"
        }
      >
        <Link href={"/grateful_tokens"}>
          <HiArrowSmLeft className="h-8 w-8 p-1 bg-[#d2deeb] rounded-full " />
        </Link>
      </Flex>
      <Flex className={"flex gap-x-10 mt-10"}>
        <div className="w-[500px] h-[500px] rounded-3xl overflow-hidden">
          <Image
            src={
              "https://res.cloudinary.com/dwgtixarr/image/upload/v1773661869/n4qwsxkxwa994hrxyx4u.jpg"
            }
            width={500}
            height={500}
            alt="Test"
          />
        </div>
        <Flex className={"flex flex-col w-[500px]"}>
          <h1 className="text-3xl font-bold text-text_secondary h-[100px] border-b-2 border-slate-200">
            Test TEest Test TEest Test TEest Test TEest
          </h1>
          <span className="text-2xl font-bold text-text_tertiary mt-6">
            ৳ 200
          </span>
          <p className="text-md text-semibold text-gray-800 mt-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quis voluptatum cupiditate perspiciatis quasi nobis temporibus ad et
            eaque placeat libero eum impedit error nihil voluptates, esse animi
            corrupti cum!
          </p>
          <span className="text-md font-semibold text-text_tertiary mt-6">
            Size (Length x Height):{" "}
            <span className="text-text_secondary">10cm x 10cm</span>
          </span>
          <span className="text-md font-semibold text-text_tertiary mt-6">
            Material: <span className="text-text_secondary">ABS</span>
          </span>
          <span className="text-md font-semibold text-text_tertiary mt-6">
            Weight: <span className="text-text_secondary">100g</span>
          </span>
          <Flex className={"flex justify-between w-[500px] items-center mt-6"}>
            <Flex className={"flex flex-row gap-x-2 items-center "}>
              <span className="text-lg font-semibold text-text_tertiary">
                Quantity:
              </span>
              <Flex className={"flex flex-row gap-x-4 items-center text-2xl "}>
                <LuCirclePlus
                  className="text-text_secondary hover:cursor-pointer"
                  onClick={increaseVal}
                />
                <input
                  className="text-gray-700 focus:outline-none w-[30px] text-center"
                  value={quantity}
                  onChange={(e) => {
                    handleManualValue(e);
                  }}
                ></input>
                <LuCircleMinus
                  className="text-text_secondary hover:cursor-pointer"
                  onClick={decreaseVal}
                />
              </Flex>
            </Flex>
            <Button>Add to Cart</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GratefulTokensProductInfo;
