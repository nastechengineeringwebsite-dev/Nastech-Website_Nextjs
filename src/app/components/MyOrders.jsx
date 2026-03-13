"use client";

import React, { useState } from 'react'
import Flex from './Flex'
import List from './List'
import ListItem from './ListItem'

const MyOrders = ({userInfo}) => {
    let [orders, setOrders] = useState(0)
    if (userInfo.orders){

        setOrders([
            
            // {
            //     id: 22222,
            //     date: "2023-01-01",
            //     amount: 213,
            //     status: "Cancelled"
            // },
            // {
            //     id: 33333,
            //     date: "2023-01-01",
            //     amount: 299,
            //     status: "Delivered"
            // },
            // {
            //     id: 44444,
            //     date: "2023-01-01",
            //     amount: 500,
            //     status: "Payment Pending"
            // },
            // {
            //     id: 55555,
            //     date: "2023-01-01",
            //     amount: 10000,
            //     status: "Processing"
            // },
        ]);
    }
    
  return (
      <Flex className={"flex flex-col gap-y-5 p-10 w-[800px] h-[600px]"}>
          <h2 className='text-text_secondary font-semibold text-3xl'>{orders === 0 ? 'No orders yet :(' : `Last ${orders.length === 1 ? " Order" : `${orders.length} Orders`}`}</h2>
          <List className={"flex flex-col gap-y-2 w-full mt-7"}>

              {orders != 0 && orders.map((order) => (
                  
              <ListItem className={"flex justify-evenly text-slate-600 font-semibold items-center py-6 border-t-2 border-slate-300 text-sm  "}>
                  <span className=' w-[100px]'>#{order.id}</span>
                  <span className=' w-[100px]'>Placed at: {order.date}</span>
                  <span className=' w-[200px]'> Amount: ৳{order.amount}</span>
                  <span className=' w-[200px]'>Status: <span className={order.status == "Delivered" ? "text-green-600" : order.status == "Payment Pending" || order.status == "Cancelled" ? "text-red-600" : "text-yellow-500"}>{order.status}</span></span>
              </ListItem>
              )) }
          </List>
    </Flex>
  )
}

export default MyOrders