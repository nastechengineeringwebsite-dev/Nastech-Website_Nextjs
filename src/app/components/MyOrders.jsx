"use client";

import React, { useState } from 'react'
import Flex from './Flex'
import List from './List'
import ListItem from './ListItem'

const MyOrders = ({ userInfo }) => {
  console.log(userInfo);
  const orders = userInfo


  return (
    <Flex className={"flex flex-col gap-y-5 lg:p-10 lg:pt-0 pt-5 lg:w-[800px] w-[100%] h-[600px]"}>
      <h2 className='text-text_secondary font-semibold lg:text-3xl text-xl'>{orders.length === 0 ? 'No orders yet :(' : `Last ${orders.length === 1 ? " Order" : `${orders.length} Orders`}`}</h2>
      <List className={"flex flex-col gap-y-2 w-full mt-7"}>

        {orders != 0 && orders.map((order) => (

          <ListItem key={order.id} className={"flex justify-between text-slate-600 font-semibold items-center lg:py-6 py-4 border-t-2 border-slate-300 md:text-sm text-[9px] "}>
            <span className=' md:w-[100px] w-[150px]'>#{order.orderInvoiceNo}</span>
            <span className=' w-[150px]'>Placed at: {order.createdAt.toLocaleString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}</span>
            <span className=' w-[150px]'> Amount: ৳{order.total}</span>
            <span className=' w-[200px]'>Status: <span className={order.status == "Delivered" ? "text-green-600" : order.status == "Pending" || order.status == "Cancelled" ? "text-red-600" : "text-yellow-500"}>{order.status}</span></span>
          </ListItem>
        ))}
      </List>
    </Flex>
  )
}

export default MyOrders