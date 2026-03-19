import React from "react";
import Flex from "../../../../components/Flex";
import prisma from "@/app/lib/prisma";
import Container from "@/app/components/Container";
import AnimatePage from "@/app/components/AnimatePage";
import List from "@/app/components/List";
import ListItem from "@/app/components/ListItem";
import Image from "next/image";
import OrderStatus from "../../../../components/OrderStatus";

const page = async ({ params }) => {
  const { oid } = await params;

  const order = await prisma.order.findUnique({
    where: {
      id: oid,
    },
  });

  const user = await prisma.user.findUnique({
    where: {
      id: order.userId,
    },
  });

  const orderItems = await prisma.orderItem.findMany({
    where: {
      orderId: oid,
    },
  });

  return (
    <Container>
      <AnimatePage>
        <Flex className={"flex flex-col mt-10 gap-y-5 mb-60"}>
          <h1 className="text-text_secondary font-semibold text-2xl">
            Order Invoice No: #{order.orderInvoiceNo}
          </h1>
          <span className="text-text_tertiary font-semibold">
            Order Placed at:{" "}
            {order.createdAt.toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
          <span className={"text-text_tertiary font-semibold"}>
            User Name: {user.username}
          </span>
          <span className={"text-text_tertiary font-semibold text-lg"}>
            Transaction Id: <span className="px-2 py-1 bg-slate-200 rounded-2xl">{order.transactionId}</span>
          </span>
          <OrderStatus status={order.status} oid={order.id} />

          <h3 className="text-text_secondary font-semibold text-xl mt-10">
            Billing Information:{" "}
          </h3>
          <Flex className={"flex gap-x-40"}>
            <List
              className={
                "text-text_tertiary font-medium text-lg flex flex-col gap-y-6"
              }
            >
              <ListItem>Full Name: {order.fullName}</ListItem>
              <ListItem>Email: {order.email}</ListItem>
              <ListItem>Phone no: {order.phone}</ListItem>
              <ListItem>Address: {order.address}</ListItem>
            </List>
            <List
              className={
                "text-text_tertiary font-medium text-lg flex flex-col gap-y-6"
              }
            >
              <ListItem>City: {order.city}</ListItem>
              <ListItem>Zip: {order.zip}</ListItem>
            </List>
          </Flex>

          <h3 className="text-text_secondary font-semibold text-xl mt-10">
            Products Ordered:{" "}
          </h3>
          <Flex className={"flex flex-col"}>
              <List className={"flex flex-col"}>
                <ListItem className={
                      "flex items-center justify-between py-4 border-b-2 border-slate-300"
                    }>
                  <span className="text-slate-800 w-[60px] text-[16px] font-bold">
                    Image
                  </span>
                  <span className="text-slate-800 w-[650px] text-[15px] font-bold">
                    Product Name
                  </span>
                  <span className="text-slate-800 w-[80px] text-[16px] font-bold">
                    Quantity
                  </span>
                  <span className="text-slate-800 w-[100px] text-[16px] font-bold">
                    Item Cost
                  </span>
                </ListItem>
              </List>
             
              <List className={"mt-2 flex flex-col "}>
                {orderItems.map((item, index) => (
                  <ListItem
                    className={
                      "flex items-center justify-between py-4 border-b-2 border-slate-300 pr-9"
                    }
                    key={index}
                  >
                    <div className="w-[60px] h-[60px]">
                      
                      <Image
                        src={item.thumbnail}
                        width={60}
                        height={60}
                        alt={`${item.productName} thumbnail`}
                      />
                    </div>
                    <span className="text-slate-800 w-[700px] text-[15px] font-semibold text-wrap">
                      {item.productName}
                    </span>
                    <span className="text-slate-800 w-[30px] text-[16px] font-semibold">
                      x{item.quantity}
                    </span>
                    <span className="text-slate-800 w-[70px] text-[15px] font-semibold text-right">
                      ৳ {item.quantity * item.price}
                    </span>
                    
                  </ListItem>
                ))}
                <ListItem className={"flex items-center justify-between py-4"}>
                  <span className="text-slate-800 text-[15px] font-semibold">
                    Subtotal:
                  </span>
                  <span className="text-slate-800 text-[15px] font-semibold text-right pr-9">
                    ৳ {order.total - 60}
                  </span>
                </ListItem>
                <ListItem
                  className={
                    "flex items-center justify-between py-4 border-b-2 border-slate-300"
                  }
                >
                  <span className="text-slate-800 text-[15px] font-semibold">
                    Delivary cost:
                  </span>
                  <span className="text-slate-800 text-[15px] font-semibold text-right pr-9">
                    ৳ 60
                  </span>
                </ListItem>
              </List>
              <Flex
                className={
                  "flex items-center justify-between py-4 border-b-2 border-slate-300"
                }
              >
                <span className="text-slate-800 text-[15px] font-semibold">
                  Total:
                </span>
                <span className="text-slate-800 text-[15px] font-semibold text-right pr-9">
                  ৳ {order.total}
                </span>
              </Flex>
              
            
          </Flex>
        </Flex>
      </AnimatePage>
    </Container>
  );
};

export default page;
