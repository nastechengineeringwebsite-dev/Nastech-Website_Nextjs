"use client";

import React, { useState } from "react";
import Flex from "./Flex";
import InputBox from "./InputBox";
import InputTextBox from "./InputTextBox";
import Button from "./Button";
import { IoMdCloudUpload } from "react-icons/io";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

const AddProducts = () => {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [material, setMaterial] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");


  const handleUploadImage = ({event, info})=>{
    if (event === 'success'){
        console.log(info?.secure_url)
        setImage(info?.secure_url)
    }
  }

  return (
    <Flex className={"flex p-10 h-[1200px] w-[800px]"}>
      <form>
        <Flex className={"flex flex-col w-[800px] gap-y-10"}>
          <Flex className={"flex gap-x-10 items-center"}>
            <div>
              {image ? (
                <Flex className={"flex w-[400px] h-[400px] rounded-4xl"}>
                  <Image
                    src={image}
                    alt="Product Image"
                    width={600}
                    height={600}
                  ></Image>
                </Flex>
              ) : (
                <Flex className="flex w-[400px] h-[400px] bg-sky-100 duration-300 rounded-4xl border-dotted border-2 border-slate-400 justify-center items-center">
                  <span className="w-[50%] font-semibold text-sm text-center">
                    Upload the thumbnail to see the preview
                  </span>
                </Flex>
              )}
            </div>
            <div>
              <CldUploadWidget uploadPreset="Product Images" options={{
                sources: ["cloudinary"]
              }}
              onSuccess={handleUploadImage}
              onClose={() => {
                document.body.style.overflow = "auto";
              }}>
                {({ open }) => {
                  return (
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        open();
                      }}
                      className={"py-10"}
                    >
                      Upload Product Image
                    </Button>
                  );
                }}
              </CldUploadWidget>
            </div>
          </Flex>
          <InputBox
            type="text"
            value={productName}
            onChange={(val) => setProductName(val.target.value)}
            placeholder={"Product Name"}
          ></InputBox>
          <InputTextBox
            type="text"
            value={description}
            onChange={(val) => setDescription(val.target.value)}
            className={""}
            placeholder={"Product Description"}
          />
          <InputBox
            type="text"
            value={material}
            onChange={(val) => setMaterial(val.target.value)}
            placeholder={"Product Material"}
          ></InputBox>
          <InputBox
            type="number"
            value={length}
            onChange={(val) => setLength(val.target.value)}
            placeholder={"Product Length"}
          ></InputBox>
          <InputBox
            type="number"
            value={width}
            onChange={(val) => setWidth(val.target.value)}
            placeholder={"Product Width"}
          ></InputBox>
          <InputBox
            type="text"
            value={weight}
            onChange={(val) => setWeight(val.target.value)}
            placeholder={"Product Weight"}
          ></InputBox>
          <InputBox
            type="text"
            value={price}
            onChange={(val) => setPrice(val.target.value)}
            placeholder={"Product Price"}
          ></InputBox>
          <Button>Add Product</Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default AddProducts;
