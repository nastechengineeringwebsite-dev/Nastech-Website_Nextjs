import Image from "next/image";
import React from "react";
import Flex from "./Flex";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const GratefulTokenProductCard = ({ product }) => {
  const slug = product.name
  .toLowerCase()
  .replace(/\s+/g, "-")
  .replace(/[^\w-]+/g, "");

  const router = useRouter()

  return (
    <Flex
      className={
        "w-[350px] flex flex-col rounded-3xl overflow-hidden shadow-2xl"
      }
    >
        <Flex className={"w-[350px] h-[350px] bg-slate-300"}>
          <Image
            src={product.thumbnail}
            alt={`${product.name} image card`}
            height={400}
            width={400}
          ></Image>
        </Flex>
        <Flex className={"p-4 flex flex-col bg-slate-100"}>
      <Link href={`/grateful_tokens/product/${product.id}/${slug}`}>
          <h4 className="h-[80px] font-semibold text-text_tertiary text-2xl">
            {product.name}
          </h4>
          </Link>
          <Flex
            className={
              "justify-between items-center border-t-[2px] pt-4 border-slate-300"
            }
          >
            <span className="font-bold text-xl text-text_secondary">
              ৳ {product.basePrice}
            </span>
            <Button >Add to Cart</Button>
          </Flex>
        </Flex>
    </Flex>
  );
};

export default GratefulTokenProductCard;
