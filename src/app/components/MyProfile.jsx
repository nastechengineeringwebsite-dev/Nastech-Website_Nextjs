"use client";

import React, { useState } from "react";
import Flex from "./Flex";
import InputBox from "./InputBox";
import Button from "./Button";

const MyProfile = () => {
  let [name, setName] = useState("Omar");
  let [email, setEmail] = useState("okmahin2@gmail.com");
  let [total_orders, setTotal_orders] = useState(10);
  let [created, setCreated] = useState("2023-01-01");

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
          type="date"
          value={created ? created : "NaN"}
          className={"pl-[200px] "}
          disabled={true}
        ></InputBox>
      </Flex>
    </Flex>
  );
};

export default MyProfile;
