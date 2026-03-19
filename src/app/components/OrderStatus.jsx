"use client"

import React, { useState } from 'react'
import Flex from './Flex'
import SelectionBox from './SelectionBox'
import axios from 'axios'
import { toast } from 'react-toastify'

const OrderStatus = ({status, oid}) => {
    const [orderStatus, setOrderStatus] = useState(status)
    const handleStatusChange = async (e)=>{
        const current = e.target.value
        await axios.post(`/api/order/changeStatus/`, {status: current, oid: oid}).then((res) => {
            toast.info(res.data.message)
            setOrderStatus(current)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <Flex className={"flex flex-row gap-x-1 items-center w-[350px]"}>

        <span className={"text-text_tertiary font-semibold w-[150px]"}>
            Order Status: 
        </span>
        <div className={`w-[250px] px-3 ${orderStatus == "Delivered" ? "bg-green-300" : orderStatus == "Pending" || orderStatus == "Cancelled" ? "bg-red-300" : "bg-yellow-200"} rounded-2xl`}>

            <SelectionBox value={orderStatus} options={["Pending", "Delivered", "Cancelled","Processing"]} className={` px-2`} onChange={(e) => {handleStatusChange(e)}}/>
        </div>
        </Flex>
        

    )
}

export default OrderStatus