"use client";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaBars, FaMinus, FaPlus } from "react-icons/fa";
import { useRef } from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import DropDownMenu from "./DropDownMenu";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  axios.defaults.withCredentials = true;

  const router = useRouter()

  let [state, setState] = useState(false);
  let [accountList, setAccountList] = useState(false);
  let [navShadow, setNavShadow] = useState(false);
  let [refresh, setRefresh] = useState(false);

  let [store_page, setStore_page] = useState(false);

  let { userSignedIn, setUserSignedIn } = useAuth();

  let changeState = () => {
    setState(!state);
    setNavShadow(false);
  };

  let linkChangeState = () => {
    if (window.innerWidth < 1024) {
      setState(!state);
      setNavShadow(false);
    }
  };

  let changeAccountList = () => {
    setAccountList(!accountList);
  }

  const path = usePathname();

let logout = async ()=>{
	await axios.get('/api/logout')
	router.push("/grateful_tokens/login")
	setUserSignedIn(false)
}


  useEffect(() => {
    if (typeof window !== "undefined") {
      function checkWindowSize() {
        if (window.innerWidth < 1024) {
          setState(false);
        } else {
          setState(false);
        }
      }
      checkWindowSize();

      window.addEventListener("resize", checkWindowSize);

      window.addEventListener("scroll", () => {
        if (window.scrollY == 0 || state) {
          setNavShadow(false);
        } else {
          setNavShadow(true);
        }
      });
    }

    const check = async () => {
      const user = await axios.get("/api/navbar");
      if (user.data.data) {
        setUserSignedIn(true);
      } else {
        setUserSignedIn(false);
      }
      console.log(user.data.data);
    };

    check();
  }, [refresh]);

  return (
    <>
      <div
        className={`lg:hidden w-[100vw] h-[100vh] top-0 left-0  ${
          state ? "bg-black/50 z-40 fixed" : "bg-transparent z-[-1] absolute"
        } duration-300`}
        id={"Nav-background"}
        onClick={() => {
          setState(false);
        }}
      ></div>
      <nav>
        <div
          className={`w-full lg:bg-bg_primary ${
            state ? "bg-transparent" : "bg-bg_primary"
          } top-[0%] z-50 lg:static lg:shadow-none ${
            navShadow ? "shadow-xl" : "shadow-none"
          } fixed duration-300`}
        >
          <ScrollToTopButton navmenu={state}></ScrollToTopButton>
          <Container>
            <Flex className="lg:py-4 py-5 justify-between items-center flex">
              <Flex className={"flex gap-x-4 items-center h-[96px]"}>

              
              <Link href={"/"}>
              <div className={"lg:w-24 lg:h-24 md:w-20 w-16"}>

                <Image
                  src={"/images/Nas Tech Logo.png"}
                  width={148}
                  height={118}
                  alt={"Nas Tech Engineering Logo"}
                  
                  loading="eager"
                  priority
                ></Image>
              </div>
              </Link>
              {usePathname().includes("grateful_tokens") &&
              (
                <>
                
              <Link href={"/grateful_tokens"}>
                
                <div className=" w-[200px] rounded-[10px] overflow-hidden">

                <Image
                  src={"/images/GratefulTokens/GratefulTokensLogo.jpg"}
                  width={500}
                  height={400}
                  alt={"Grateful Tokens Logo"}
                  className="fit"
                  loading="eager"
                  priority
                ></Image>
                </div>
                
              </Link>
              </>)
              }
              </Flex>
              <FaBars
                className={`lg:hidden absolute top-[50%] translate-y-[-50%] right-5  hover:cursor-pointer z-20 ${
                  state ? "text-transparent" : "text-text_primary"
                } duration-150 md:w-6 md:h-6 w-5 h-5`}
                onClick={changeState}
              />
              <List
                className={`lg:flex-row flex-col lg:justify-end flex gap-8 lg:relative absolute lg:bg-bg_primary bg-bg_primary lg:w-full lg:h-full h-[100vh] top-0 lg:left-0 lg:items-center ${
                  state ? "left-[0%]" : "left-[-100%]"
                } lg:duration-0 duration-500 w-[70%] max-w-[300px] lg:max-w-[1000px] lg:shadow-none shadow-2xl shadow-black/70 lg:pt-0 lg:pl-0 pt-12 px-5 overflow-scroll lg:overflow-visible scrollbar-hide`}
              >
                <IoMdCloseCircleOutline
                  className="lg:hidden absolute top-4 right-4 text-text_primary w-6 h-6 hover:cursor-pointer z-50"
                  onClick={changeState}
                />
                {!store_page && !usePathname().includes("grateful_tokens") ? (
                  <>
                    <ListItem
                      className=" text-text_primary font-semibold text-[16px] relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8] lg:after:bottom-[-5px]
                         after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 after:rounded-full lg:py-0 py-2"
                      key={"Home"}
                    >
                      <Link
                        href="/"
                        className="hover:font-semibold lg:hover:font-semibold"
                        onClick={linkChangeState}
                      >
                        Home
                      </Link>
                    </ListItem>
                    <ListItem
                      className=" text-text_primary font-semibold text-[16px] after:rounded-full relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8] lg:after:bottom-[-5px]
									after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2 "
                      key={"About"}
                    >
                      <Link
                        href="/about"
                        className="hover:font-semibold lg:hover:font-semibold"
                        onClick={linkChangeState}
                      >
                        About Us
                      </Link>
                    </ListItem>
                    <ListItem
                      className=" text-text_primary font-semibold text-[16px] after:rounded-full relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8] lg:after:bottom-[-5px]
									after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2"
                      key={"Technical Training"}
                    >
                      <Link
                        href="/nas_technical_trainning"
                        className="hover:font-semibold lg:hover:font-semibold"
                        onClick={linkChangeState}
                      >
                        Technical Training
                      </Link>
                    </ListItem>

                    <DropDownMenu
                      label={"Provided Services"}
                      link={"#"}
                      listComponent={{
                        "360 Engineering Solution ":
                          "/nas_360_engineering_solutions",
                      }}
                      navbarState={linkChangeState}
                      showMenu={state}
                    ></DropDownMenu>

                    <ListItem
                      className=" text-text_primary font-semibold text-[16px] after:rounded-full relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8] lg:after:bottom-[-5px]
									after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2"
                      key={"Grateful Tokens"}
                    >
                      <Link
                        href="/grateful_tokens"
                        className="hover:font-semibold lg:hover:font-semibold"
                        onClick={() => {
                          setStore_page(true);
                          setRefresh(!refresh);
                        }}
                      >
                        Product Store
                      </Link>
                    </ListItem>

                    <ListItem
                      className=" text-text_primary font-semibold text-[16px] after:rounded-full relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8] lg:after:bottom-[-5px]
									after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2"
                      key={"Contact Us"}
                    >
                      <Link
                        href="/contact"
                        className="hover:font-semibold lg:hover:font-semibold"
                        onClick={linkChangeState}
                      >
                        Contact Us
                      </Link>
                    </ListItem>
                  </>
                ) : (
                  <>
                    <ListItem
                      className=" text-text_primary font-semibold text-[16px] after:rounded-full relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8] lg:after:bottom-[-5px]
									after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2"
                      key={"Home Page"}
                    >
                      <Link
                        href="/"
                        className="hover:font-semibold lg:hover:font-semibold"
                        onClick={() => {
                          setStore_page(false);
                          setRefresh(!refresh);
                        }}
                      >
                        Main Page
                      </Link>
                    </ListItem>
                    <ListItem
                      className=" text-text_primary font-semibold text-[16px] after:rounded-full relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8] lg:after:bottom-[-5px]
									after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2"
                      key={"Grateful Tokens Products"}
                    >
                      <Link
                        href="/grateful_tokens"
                        className="hover:font-semibold lg:hover:font-semibold"
                        onClick={() => {
                          setStore_page(false);
                          setRefresh(!refresh);
                        }}
                      >
                        Products
                      </Link>
                    </ListItem>
                    {userSignedIn ? (
                      <DropDownMenu
                        label={"Account"}
                        link={"#"}
                        listComponent={{
                          "Profile": "/grateful_tokens/account",
                          "Logout": logout,
                        }}
                        navbarState={linkChangeState}
                        showMenu={state}
                      ></DropDownMenu>
                    ) : (
                      <DropDownMenu
                        label={"Account"}
                        link={"#"}
                        listComponent={{
                          "Login": "/grateful_tokens/login",
                          "Sign Up": "/grateful_tokens/sign_up",
                        }}
                        navbarState={linkChangeState}
                        showMenu={state}
                      ></DropDownMenu>
                    )}
                    <ListItem
                      className=" text-text_primary font-semibold text-[16px] after:rounded-full relative after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8] lg:after:bottom-[-5px]
									after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2"
                      key={"Shopping cart"}
                    >
                      <Link
                        href="/cart"
                        className="hover:font-semibold lg:hover:font-semibold"
                      >
                        <FaShoppingCart />
                      </Link>
                    </ListItem>
                  </>
                )}
              </List>
            </Flex>
          </Container>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
