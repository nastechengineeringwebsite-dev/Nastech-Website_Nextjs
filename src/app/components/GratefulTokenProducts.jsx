"use client";

import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import GratefulTokenProductCard from "./GratefulTokenProductCard";
import axios from "axios";

const GratefulTokenProducts = ({products}) => {
  
  return (
    <Flex className={"mt-20 grid grid-cols-3 gap-10"}>
      {products.map((item, index) => (
        <GratefulTokenProductCard product={item} />
      ))}
    </Flex>
  );
};

export default GratefulTokenProducts;
