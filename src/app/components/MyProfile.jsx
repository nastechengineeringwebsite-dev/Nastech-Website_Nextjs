"use client";

import React, { useState } from "react";
import Flex from "./Flex";
import InputBox from "./InputBox";
import Button from "./Button";

const MyProfile = ({userInfo = null}) => {

  let [name, setName] = useState(userInfo.username? userInfo.username : "");
  let [email, setEmail] = useState(userInfo.email? userInfo.email : "");
  let [total_orders, setTotal_orders] = useState(userInfo.total_orders? userInfo.total_orders : "");
  let [created, setCreated] = useState(userInfo.createdAt? userInfo.createdAt : "");

  let [editName, setEditName] = useState(false);
  let [editEmail, setEditEmail] = useState(false);

  return (
    <Flex className={"flex flex-col gap-y-5 p-10 w-[800px] h-[600px]"}>
      <Flex className={"relative"}>
        <span className="text-slate-500 font-semibold absolute top-[25%]">
          Username
        </span>
        <InputBox
          mandetory={false}
          type="text"
          value={name ? name : " "}
          onChange={(val) => setName(val.target.value)}
          className={"pl-[200px] "}
          disabled={!editName}
        ></InputBox>
        <Button
          className={"ml-10 w-[100px]"}
          onClick={() => setEditName(!editName)}
        >
          {editName ? "Save" : "Edit"}
        </Button>
      </Flex>
      <Flex className={"relative"}>
        <span className="text-slate-500 font-semibold absolute top-[25%]">
          Email Address
        </span>
        <InputBox
          mandetory={false}
          type="email"
          value={email ? email : " "}
          onChange={(val) => setEmail(val.target.value)}
          className={"pl-[200px] "}
          disabled={!editEmail}
        ></InputBox>
        <Button
          className={"ml-10 w-[100px]"}
          onClick={() => setEditEmail(!editEmail)}
        >
          {editEmail ? "Save" : "Edit"}
        </Button>
      </Flex>
      <Flex className={"relative"}>
        <span className="text-slate-500 font-semibold absolute top-[25%]">
          Total Orders Placed
        </span>
        <InputBox
          mandetory={false}
          type="number"
          value={total_orders ? total_orders : "0"}
          className={"pl-[200px] "}
          disabled={true}
        ></InputBox>
          </Flex>
          <Flex className={"relative"}>
        <span className="text-slate-500 font-semibold absolute top-[25%]">
          Account Created At
        </span>
        <InputBox
          mandetory={false}
          type="text"
          value={created ? created : "NaN"}
          className={"pl-[200px] "}
          disabled={true}
        ></InputBox>
      </Flex>
    </Flex>
  );
};

export default MyProfile;
