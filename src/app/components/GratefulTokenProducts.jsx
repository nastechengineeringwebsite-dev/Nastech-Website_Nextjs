"use client";

import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import GratefulTokenProductCard from "./GratefulTokenProductCard";
import axios from "axios";

const GratefulTokenProducts = ({products}) => {
  
  return (
    <Flex className={"mt-20 flex flex-cols lg:gap-x-8 lg:justify-center xl:justify-start md:justify-between  justify-evenly md:gap-y-14 gap-y-8 flex-wrap"}>
      {products.map((item, index) => (
        <GratefulTokenProductCard product={item} />
      ))}
      {products.map((item, index) => (
        <GratefulTokenProductCard product={item} />
      ))}
    </Flex>
  );
};

export default GratefulTokenProducts;
