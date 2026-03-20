"use client";

import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import GratefulTokenProductCard from "./GratefulTokenProductCard";
import axios from "axios";

const GratefulTokenProducts = ({products}) => {
  
  return (
    <Flex className={"mt-20 flex flex-cols lg:gap-x-8 gap-x-4 gap-y-14 flex-wrap"}>
      {products.map((item, index) => (
        <GratefulTokenProductCard product={item} />
      ))}
      {/* {products.map((item, index) => (
        <GratefulTokenProductCard product={item} />
      ))} */}
    </Flex>
  );
};

export default GratefulTokenProducts;
