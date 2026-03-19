export const dynamic = "force-dynamic"

import React from 'react'
import Flex from './Flex'
import List from './List'
import ListItem from './ListItem'
import Link from 'next/link'

const AdminOrdersInfo = ({orders}) => {
  return (
    
    <Flex className = "flex p-10 h-[1200px] w-[800px] flex-col">
        <h2 className='text-text_secondary font-semibold text-3xl'>Orders: {orders.length}</h2>
        <List className={"mt-10 w-[800px] flex flex-col"}>

            <ListItem key={"Heading"} className={"flex gap-x-4 text-slate-800 font-bold items-center py-6 border-t-2 border-slate-300 text-sm"}>
                    <span className=' w-[160px] border-r-2 border-slate-300 text-center'>Invoice No</span>
                    <span className=' w-[160px] border-r-2 border-slate-300 text-center'>Order Placed At</span>
                    <span className=' w-[160px] border-r-2 border-slate-300 text-center'>Amount</span>
                    <span className=' w-[160px] border-r-2 border-slate-300 text-center'>Ordered By</span>
                    <span className=' w-[160px] text-center'>Order Status</span>
                </ListItem>
        </List>
        <Flex className={"h-full mt-4 w-[800px] overflow-y-auto scrollbar-overlay"}>
            <List className={"flex flex-col gap-y-2 w-full mt-7"}>
                {orders.map((current)=>(
                    
                <Link href = {`/grateful_tokens/admin/orderInfo/${current.id}`} target = "_blank">
                        <ListItem key={orders.orderInvoiceNo} className={"flex gap-x-4 text-slate-600 font-semibold items-center py-6 border-t-2 border-slate-300 text-sm  hover:bg-slate-100 duration-200"}>
                            <span className=' w-[160px]'>#{current.orderInvoiceNo}</span>
                            <span className=' w-[160px]'>{current.createdAt.toLocaleString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                            })}</span>
                            <span className=' w-[160px] text-right'>৳ {current.total}</span>
                            <span className=' w-[160px]'>{current.fullName}</span>
                            <span className=' w-[160px]'>{current.status}</span>
                        </ListItem>
                </Link>
                ))}
            </List>
        </Flex>
    </Flex>
  )
}

export default AdminOrdersInfo