"use client"

import Image from "next/image";
import React, { useState } from "react";
import Flex from "./Flex";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { cardTheme } from "flowbite-react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const GratefulTokenProductCard = ({ product }) => {
  const slug = product.name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

  let { userSignedIn, setUserSignedIn } = useAuth()

  const { cartItems, setCartItems } = useCart()

  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleCartAdd = async () => {

    const redirectUrl = `/grateful_tokens/login?redirect=${window.location.pathname}`

    router.prefetch(redirectUrl)

    if (!userSignedIn) {
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
          quantity: 1,
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
                ? { ...item, quantity: item.quantity + 1 }
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
      }
    }
  }


  return (
    <Flex
      className={
        "lg:w-[350px] md:w-[220px] w-[180px] flex flex-col lg:rounded-3xl rounded-xl overflow-hidden shadow-2xl"
      }
      onMouseEnter = {()=>{ router.prefetch(`/grateful_tokens/product/${product.id}/${slug}`) }}
    >
      <Link href={`/grateful_tokens/product/${product.id}/${slug}`} prefetch = {true}>
      <Flex className={"lg:w-[350px] lg:h-[350px] md:w-[220px] md:h-[220px] w-[180px] h-[180px] bg-slate-300"}>
        <Image
          src={product.thumbnail}
          alt={`${product.name} image card`}
          height={400}
          width={400}
        ></Image>
      </Flex>
      </Link>
      <Flex className={"lg:p-4 p-2 flex flex-col bg-slate-100"}>
        <Link href={`/grateful_tokens/product/${product.id}/${slug}`} prefetch = {true}>
          <h4 className="lg:h-[80px] h-[60px] font-semibold text-text_tertiary lg:text-xl text-sm">
            {product.name}
          </h4>
        </Link>
        <Flex
          className={
            "flex justify-between items-center border-t-[2px] pt-4 border-slate-300"
          }
        >
          <span className="font-bold lg:text-xl text-sm text-text_secondary">
            ৳ {product.basePrice}
          </span>
          <Button onClick={handleCartAdd} loading={loading} className={"lg:text-lg text-sm "}>Add to Cart</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GratefulTokenProductCard;
