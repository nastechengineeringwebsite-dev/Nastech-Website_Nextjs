"use client";

import React, { useState } from "react";
import Flex from "./Flex";
import GratefulTokenProductCard from "./GratefulTokenProductCard";

const GratefulTokenProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1234,
      name: "Test",
      description: "This is a test",
      thumbnail:
        "https://res.cloudinary.com/dwgtixarr/image/upload/v1773661869/n4qwsxkxwa994hrxyx4u.jpg",
      basePrice: 200,
      length: 10,
      width: 10,
      weight: 200,
      material: "ABS",
    },
    {
      id: 1235,
      name: "Test2 Test2 Test2 Test2 Test2 Test2 Test2",
      description: "This is a test2",
      thumbnail:
        "https://res.cloudinary.com/dwgtixarr/image/upload/v1773661869/n4qwsxkxwa994hrxyx4u.jpg",
      basePrice: 100,
      length: 10,
      width: 10,
      weight: 100,
      material: "ABS",
    },
  ]);
  return (
    <Flex className={"mt-20 grid grid-cols-3 gap-10"}>
      {products.map((item,index) => (
        <GratefulTokenProductCard product={item} />
      ))}
    </Flex>
  );
};

export default GratefulTokenProducts;
