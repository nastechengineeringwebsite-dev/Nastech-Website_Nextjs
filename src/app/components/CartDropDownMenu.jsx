"use client";

import React, { useEffect, useState } from "react";
import Flex from "./Flex";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import List from "./List";
import ListItem from "./ListItem";
import Image from "next/image";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdCloseCircleOutline } from "react-icons/io"
import { IoCloseCircle } from "react-icons/io5"
import { usePathname } from "next/navigation";

const CartDropDownMenu = ({ uid }) => {
  const [showCart, setShowCart] = useState(false);
  const [largeDevice, setLargeDevice] = useState(true);

  let { userSignedIn, setUserSignedIn } = useAuth();

  const { cartItems, setCartItems } = useCart();

  const pathname = usePathname();
  const isStorePage = pathname.includes("grateful_tokens");

  let items = cartItems;

  const findSum = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  let handleShowMenu = (click, state) => {
    if (click && !largeDevice) {
      setShowCart(state);
    } else if (!click && largeDevice) {
      setShowCart(state);
    }
  };

  const handleCartItemDelete = async (cartId) => {
    const previousState = cartItems;

    setCartItems((prev) => prev.filter((item) => item.id !== cartId));

    try {
      const uid = userSignedIn.id;

      const res = await axios.delete(`/api/cart/removeCart/${cartId}`);

      toast.success("Cart deleted successfully");
    } catch (err) {
      setCartItems(previousState);
      toast.error("Failed to delete cart");
      console.log(err);
    } finally {
      console.log("Operation completed");
    }
  };

  const totalItems = () => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  };

  useEffect(() => {
    const checkDevice = () => {
      setLargeDevice(window.innerWidth >= 1280);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);


    if (!largeDevice) {
      if (showCart) {
        // Lock scroll
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
      } else {
        // Unlock scroll
        document.body.style.overflow = "";
        document.body.style.height = "";
      }
    }
    return () => {
      // Cleanup in case component unmounts
      document.body.style.overflow = "";
      document.body.style.height = "";
      window.removeEventListener("resize", checkDevice);
    };
  }, [showCart, largeDevice, userSignedIn]);

  return (
    isStorePage &&
    <div
      onMouseEnter={() => {
        handleShowMenu(false, true);
      }}
      onMouseLeave={() => {
        handleShowMenu(false, false);
      }}
      onClick={() => {
        if (userSignedIn) {
          handleShowMenu(true, !showCart);
        } else {
          handleShowMenu(true, false);
        }
      }}
      className="relative "
    >
      <Flex
        className="flex flex-col text-text_primary font-semibold text-[16px] after:rounded-full relative lg:after:block after:hidden after:absolute after:w-full lg:after:h-[3px] after:h-[1px] lg:after:bg-text_primary after:bg-[#92A2B8] lg:after:bottom-[-5px]
    after:bottom-[-13px] lg:after:scale-x-0 lg:hover:after:scale-x-110 lg:after:duration-150 lg:py-0 py-2"
        key={"Shopping cart"}
      >
        {userSignedIn ? (
          <FaShoppingCart />
        ) :
          (<Link href={"/grateful_tokens/login"}>
            <FaShoppingCart />
          </Link>)
        }
        {userSignedIn && (
          <Flex className="flex absolute bg-bg_secondary text-gray-300 font-medium lg:text-sm text-[10px] lg:p-2 p-1 rounded-full lg:h-[20px] h-[15px] items-center justify-center top-0 right-0 translate-x-[100%] translate-y-[-50%]">
            {totalItems()}
          </Flex>
        )}
      </Flex>
      {largeDevice && items.length > 0 && userSignedIn && (
        <Flex
          className={`flex flex-col absolute bg-slate-200 p-3 rounded-lg left-1/2 top-[30px] translate-x-[-50%] border-gray-400 border-[1px] ${showCart
            ? "opacity-100 z-10 lg:top-[30px] max-h-[400px]"
            : "opacity-0 z-[-1] lg:top-16 max-h-0"
            } lg:ease-in-out duration-300 origin-top`}
        >
          <div className="lg:absolute w-3 h-3 left-1/2 top-0 -translate-x-1/2  -translate-y-1/2 bg-slate-200 rotate-45 lg:block hidden border-gray-400 border-t-[1px] border-l-[1px]"></div>
          <motion.div layout className={"mt-2 flex flex-col "}>
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.25 }}
                >
                  <ListItem
                    className={
                      "flex items-center gap-x-4 py-4 border-b-2 border-slate-300"
                    }
                  >
                    <div className="w-[50px] h-[50px]">
                      <Image
                        src={item.thumbnail}
                        width={50}
                        height={50}
                        alt="Product name"
                      />
                    </div>
                    <span className="text-slate-800 w-[150px] text-[12px] font-semibold">
                      {item.productName}
                    </span>
                    <span className="text-slate-800 w-[30px] text-[17px] font-semibold">
                      x{item.quantity}
                    </span>
                    <span className="text-slate-800 w-[50px] text-[15px] font-semibold">
                      ৳ {item.quantity * item.price}
                    </span>
                    <button onClick={() => handleCartItemDelete(item.id)}>
                      <span className="text-text_secondary text-[17px] font-semibold hover:cursor-pointer" >
                        <IoCloseCircle />
                      </span>
                    </button>
                  </ListItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          <Flex className={"flex items-center justify-between mt-5"}>
            <button className="bg-bg_secondary text-gray-200 text-[14px] font-semibold px-3 py-2 rounded-full hover:cursor-pointer">
              <Link href={"/grateful_tokens/checkout"}>Checkout</Link>
            </button>
            <span className="text-text_tertiary font-semibold text-right pr-10">
              Subtotal: ৳ {findSum()}
            </span>
          </Flex>
        </Flex>
      )}

      {!largeDevice && userSignedIn && (
        <>
          {/* Background overlay */}
          <div
            className={`fixed inset-0 bg-black/50 z-40 transition ${showCart ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}

          />

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-[80%] max-w-[350px] bg-slate-200 z-50 shadow-xl transform transition-transform duration-300 ${showCart ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="p-4 flex flex-col h-full">

              {/* Header */}
              <div className="flex justify-between items-center mb-4 text-text_secondary font-semibold">
                <h2 className="font-semibold text-lg">Your Cart</h2>
                <IoMdCloseCircleOutline className="text-2xl font-semibold" onClick={() => setShowCart(false)} />

              </div>

              {/* Items */}
              <List className="flex-1 overflow-y-auto">
                {items.map((item) => (
                  <ListItem key={item.id} className="flex items-center gap-x-4 py-4 border-b-2 border-slate-300">
                    <div className="w-[50px] h-[50px]">
                      <Image
                        src={item.thumbnail}
                        width={50}
                        height={50}
                        alt="Product name"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-sm font-semibold">
                        {item.productName}
                      </span>
                      <span className="text-xs text-text_secondary font-semibold">
                        x{item.quantity} - ৳ {item.price * item.quantity}
                      </span>
                    </div>

                    <button onClick={() => handleCartItemDelete(item.id)}>

                      <span className="text-text_secondary text-[17px] font-semibold hover:cursor-pointer" >
                        <IoCloseCircle />
                      </span>

                    </button>
                  </ListItem>
                ))}
              </List>

              {/* Footer */}
              <Flex className="flex flex-col gap-y-5 pt-4 border-t-2 border-slate-300">
                <span className="text-text_secondary font-semibold text-left">
                  Subtotal: ৳ {findSum()}
                </span>
                <button className="bg-bg_secondary text-gray-200 text-[14px] font-semibold w-full py-2 rounded-full hover:cursor-pointer">
                  <Link href={"/grateful_tokens/checkout"}>Checkout</Link>
                </button>
              </Flex>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDropDownMenu;
