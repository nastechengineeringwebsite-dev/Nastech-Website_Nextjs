"use client";

import React, { useState } from "react";
import Flex from "./Flex";
import InputBox from "./InputBox";
import InputTextBox from "./InputTextBox";
import Button from "./Button";
import { IoMdCloudUpload } from "react-icons/io";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

const AddProducts = () => {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [material, setMaterial] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");

  const [loading, setLoading] = useState(false);

  const handleUploadImage = ({ event, info }) => {
    if (event === "success") {
      console.log(info?.secure_url);
      setImage(info?.secure_url);
    }
  };

  const handleProductUpload = async (e) => {
    e.preventDefault();
    if (image && productName && description && material && length && width && weight && price){
        setLoading(true)
        const res = await axios.post('/api/addProduct', {
            name: productName,
            description: description,
            thumbnail: image,
            basePrice: Number(price),
            length: Number(length),
            width: Number(width),
            weight: Number(weight),
            material: material,
        })

        if (res.status === 200){
            toast.success("Product Created Successfully")
            setLoading(false)
            setImage('')
            setProductName('')
            setDescription('')
            setLength('')
            setWidth('')
            setMaterial('')
            setPrice('')
            setWeight('')

        }

        else{
            toast.error("Error creating product")
            setLoading(false)
        }
    }

    else{
        setLoading(false)
        toast.error("Please fill up all the fields")
    }
  };

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
              <CldUploadWidget
                uploadPreset="Product Images"
                options={{
                  sources: ["cloudinary"],
                }}
                onSuccess={handleUploadImage}
                onClose={() => {
                  document.body.style.overflow = "auto";
                }}
              >
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
            type="text"
            value={length}
            onChange={(val) => setLength(val.target.value)}
            placeholder={"Product Length"}
          ></InputBox>
          <InputBox
            type="text"
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
          <Button loading={loading} onClick={handleProductUpload}>
            Add Product
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default AddProducts;
