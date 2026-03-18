"use client";

import React, { useState } from 'react'
import Flex from './Flex'
import List from './List'
import ListItem from './ListItem'

const MyOrders = ({userInfo}) => {
    console.log(userInfo);
    const orders = userInfo
    
    
  return (
      <Flex className={"flex flex-col gap-y-5 p-10 w-[800px] h-[600px]"}>
          <h2 className='text-text_secondary font-semibold text-3xl'>{orders === 0 ? 'No orders yet :(' : `Last ${orders.length === 1 ? " Order" : `${orders.length} Orders`}`}</h2>
          <List className={"flex flex-col gap-y-2 w-full mt-7"}>

              {orders != 0 && orders.map((order) => (
                  
              <ListItem key = {order.id} className={"flex justify-between text-slate-600 font-semibold items-center py-6 border-t-2 border-slate-300 text-sm  "}>
                  <span className=' w-[100px]'>#{order.orderInvoiceNo}</span>
                  <span className=' w-[150px]'>Placed at: {order.createdAt.toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })}</span>
                  <span className=' w-[150px]'> Amount: ৳{order.total}</span>
                  <span className=' w-[200px]'>Status: <span className={order.status == "Delivered" ? "text-green-600" : order.status == "Pending" || order.status == "Cancelled" ? "text-red-600" : "text-yellow-500"}>{order.status}</span></span>
              </ListItem>
              )) }
          </List>
    </Flex>
  )
}

export default MyOrders