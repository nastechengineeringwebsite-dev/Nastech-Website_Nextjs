"use client";

import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import Image from "next/image";
import { LuCirclePlus } from "react-icons/lu";
import { LuCircleMinus } from "react-icons/lu";
import { HiArrowSmLeft } from "react-icons/hi";
import Button from "./Button";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const GratefulTokensProductInfo = ({ product }) => {
  
  const router = useRouter()

  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false)

  const { userSignedIn, setUserSignedIn } = useAuth()

  const { cartItems, setCartItems } = useCart()


  const handleAddtoCart = async ()=>{
    const redirectUrl = `/grateful_tokens/login?redirect=${window.location.pathname}`

    router.prefetch(redirectUrl)
    if (!userSignedIn){
      router.push(redirectUrl)
    }
    else{

      try {
        setLoading(true);
    
        const uid = userSignedIn.id;
    
        const res = await axios.post('/api/cart/addCart', {
          id: uid,
          productId: product.id,
          thumbnail: product.thumbnail,
          quantity: quantity,
          price: Number(product.basePrice),
          productName: product.name,
        });
    
        
        setCartItems((prev) => {
          const existing = prev.find(
            (item) => item.productId === product.id
          );
    
          if (existing) {
            return prev.map((item) =>
              item.productId === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
          }
          
          return [...prev, res.data.data]; 
        });
        toast.success("Product added to cart successfully");
      } catch (err) {
        toast.error("Failed to add product to cart");
        console.log(err);
      } finally {
        setLoading(false);
        setQuantity(1);
      }
    }
  }
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
      {product && 
      <Flex className={"flex gap-x-10 mt-10"}>
        <div className="w-[500px] h-[500px] rounded-3xl overflow-hidden">
          <Image
            src={
              product.thumbnail
            }
            width={500}
            height={500}
            alt={`${product.name} Product Image`}
          />
        </div>
        <Flex className={"flex flex-col w-[500px]"}>
          <h1 className="text-3xl font-bold text-text_secondary h-[100px] border-b-2 border-slate-200">
            {product.name}
          </h1>
          <span className="text-2xl font-bold text-text_tertiary mt-6">
            ৳ 200
          </span>
          <p className="text-md text-semibold text-gray-800 mt-10 h-[95px]">
            {product.description}
            
          </p>
          <span className="text-md font-semibold text-text_tertiary mt-6">
            Size (Length x Height):{" "}
            <span className="text-text_secondary">{product.length}cm x {product.width}cm</span>
          </span>
          <span className="text-md font-semibold text-text_tertiary mt-6">
            Material: <span className="text-text_secondary">{product.material}</span>
          </span>
          <span className="text-md font-semibold text-text_tertiary mt-6">
            Weight: <span className="text-text_secondary">{product.weight}g</span>
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
            <Button onClick={handleAddtoCart} loading={loading}>Add to Cart</Button>
          </Flex>
        </Flex>
      </Flex>
      }
    </Flex>
  );
};

export default GratefulTokensProductInfo;
