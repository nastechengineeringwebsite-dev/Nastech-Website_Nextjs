"use client";

import React, { useState } from "react";
import Container from "./Container";
import InputBox from "./InputBox";
import Flex from "./Flex";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Button from "./Button";
import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "../Context/AuthContext"

const Login = () => {
    let router = useRouter()
  let [show_password, setShow_password] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [loading, setLoading] = useState(false)

  let {userSignedIn, setUserSignedIn} = useAuth()

  let loginUser = async (e) => {
    e.preventDefault();
    if (password) {
      setLoading(true)
      const user = await axios.get(`/api/login/${email}`);
      if (user.data.data) {
        if (user.data.data.password == password) {
          setEmail("");
          setPassword("");
          setUserSignedIn(true)
          setLoading(false)
          router.push("/grateful_tokens/account")
          router.refresh()
        } else {
          setLoading(false)
          toast.error("Credentials not correct! Please check again");
        }
      } else {
        setLoading(false)
        toast.error("User do not exist! Please check again");
      }
    } else {
      setLoading(false)
      toast.error("Credentials not correct! Please check again");
    }
    setLoading(false)
  };
  return (
    <form className="py-20 mb-40 w-[40%] mx-auto">
      <Flex className={"gap-y-10 flex-col"}>
        <InputBox
          placeholder={"Email Address"}
          type="email"
          value={email}
          onChange={(val) => setEmail(val.target.value)}
        ></InputBox>
        <Flex className={"relative"}>
          <div
            className={
              "text-text_secondary hover:cursor-pointer absolute bottom-[15%] right-[4%] z-10"
            }
            onClick={() => {
              setShow_password(!show_password);
            }}
          >
            {!show_password ? <FaEye /> : <FaEyeSlash />}
          </div>
          <InputBox
            placeholder={"Password"}
            type={show_password ? "text" : "password"}
            value={password}
            onChange={(val) => setPassword(val.target.value)}
          ></InputBox>
        </Flex>

        <Button className={"mt-4"} onClick={loginUser} loading = {loading}>
          Login
        </Button>

        <span className="mx-auto">
          Don't have an account?{" "}
          <Link
            className="text-text_secondary font-semibold"
            href="/grateful_tokens/sign_up"
          >
            Sign Up
          </Link>
        </span>
      </Flex>
    </form>
  );
};

export default Login;
