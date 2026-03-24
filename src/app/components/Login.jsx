"use client";

import React, { Suspense, useState } from "react";
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
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import validateEmail from "../utils/validateEmail";
import {Spinner} from "@heroui/react";

const Login = () => {
  const router = useRouter();
  const redirect = typeof window!=="undefined"? new URLSearchParams(window.location.search).get("redirect"):null
  let [show_password, setShow_password] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [loading, setLoading] = useState(false);

  let [pageLoading, setPageLoading] = useState(false)

  let { userSignedIn, setUserSignedIn } = useAuth();
  let { cartItems, setCartItems } = useCart();

  let loginUser = async (e) => {
    e.preventDefault();
    if (password) {
      setLoading(true);
      const res = await axios.post(`/api/login`, {
        email: email,
        password: password,
      });

      // console.log(res)
      if (res.data.user && res.data.pass_valid) {
        
        router.push( redirect || "/grateful_tokens/account");
        router.refresh();
        setEmail("");
        setPassword("");
        setUserSignedIn(res.data.user);
        const cart = await axios.get(`/api/cart/getCart/${res.data.user.id}`)
        if (cart.data.data) {
          setCartItems(cart.data.data)
        }
        setLoading(false);
      } else if (!res.data.user){
        setLoading(false);
        toast.error("User do not exist! Please check again");
      } else if (!res.status.pass_valid){
        setLoading(false);
        toast.error("Invalid Password! Please check again");
      }
    } else {
      setLoading(false);
      toast.error("Credentials not correct! Please check again");
    }
    setLoading(false);
  };

  const handleForgetPassword = async ()=>{
    
    if (!email || !validateEmail(email)){
      toast.error("Need to input a valid email")
      return
    }
    setPageLoading(true)
    const res = await axios.post("/api/otp",{email: email}).then((res)=>{
      if (res.status == 201){
        console.log(res.data)
        router.push(`/grateful_tokens/otp?email=${encodeURIComponent(email)}`)
      }
    })

  }
  return (
    

    <form className="py-20 mb-40 lg:w-[40%] md:w-[60%] md:max-w-[400px] w-[90%] max-w-[350px] lg:mt-0 mt-36 mx-auto">
      <Flex className={"flex lg:gap-y-10 gap-y-7 flex-col"}>
        <InputBox
          placeholder={"Email Address"}
          type="email"
          value={email}
          onChange={(val) => setEmail(val.target.value)}
        ></InputBox>
        <Flex className={"flex relative"}>
          <div
            className={
              "text-text_secondary hover:cursor-pointer absolute bottom-[50%] translate-y-[50%] right-[4%] z-10"
            }
            onClick={() => {
              setShow_password(!show_password);
            }}
          >
            {!show_password ? <FaEye /> : <FaEyeSlash />}
          </div>
          <Flex className={"flex flex-col w-full relative"}>

          <InputBox
            placeholder={"Password"}
            type={show_password ? "text" : "password"}
            value={password}
            onChange={(val) => setPassword(val.target.value)}
          ></InputBox>
          {pageLoading ?<Spinner className="text-blue-500 absolute bottom-[-30px] right-0" size="sm" /> : 
          <span className="absolute bottom-[-30px] right-0 text-text_secondary text-sm font-semibold hover:cursor-pointer" onClick={handleForgetPassword}>Forgot Password?</span>
          }
          </Flex>
        </Flex>

        <Button
          className={"mt-4"}
          onClick={loginUser}
          loading={loading}
          type="submit"
        >
          Login
        </Button>

        <span className="mx-auto text-sm">
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
