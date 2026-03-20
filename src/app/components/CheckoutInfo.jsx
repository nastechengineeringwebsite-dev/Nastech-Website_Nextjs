"use client";

import React, { useEffect, useState } from 'react'
import Flex from './Flex';
import List from './List';
import ListItem from './ListItem';
import Image from 'next/image';
import InputBox from './InputBox';
import Button from './Button';
import SelectionBox from './SelectionBox';
import { toast } from 'react-toastify';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const CheckoutInfo = () => {

    const router = useRouter()

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhoneNumber] = useState('')
    const [country, setCountry] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [total, setTotal] = useState('')

    const [loading, setLoading] = useState(false)
    const { cartItems, setCartItems } = useCart()
    const { userSignedIn, setUserSignedIn } = useAuth()

    const items = cartItems;

    const findSum = () => {
        return cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      };

    const handleCartItemDelete = async (e, cartId) => {

        e.preventDefault();
        const previousState = cartItems;

        setCartItems((prev) => prev.filter((item) => item.id !== cartId));

        try {

            const res = await axios.delete(`/api/cart/removeCart/${cartId}`);


            toast.success("Cart deleted successfully");

        } catch (err) {
            setCartItems(previousState);
            toast.error("Failed to delete cart");
            console.log(err);
        } finally {
            console.log("Operation completed");
        }
    }


    const handleOrder = (e) => {
        e.preventDefault()
        
        if (fullName && email && phone && country && address && city && zip && transactionId) {
            // router.push(`/grateful_tokens/order-success/100`)
            try {
                setLoading(true)
                axios.post('/api/order/createOrder', {
                    userId: userSignedIn.id,
                    fullName: fullName,
                    email: email,
                    phone: Number(phone),
                    country: country,
                    city: city,
                    address: address,
                    zip: Number(zip),
                    transactionId: transactionId,
                    items: items,
                    total: total,
                }).then(async (res) => {
                    // console.log(res.data.data)
                    setLoading(false)
                    setFullName('')
                    setEmail('')
                    setPhoneNumber('')
                    setCountry('')
                    setAddress('')
                    setCity('')
                    setZip('')
                    setTransactionId('')
                    setTotal('')
                    
                    setCartItems([])

                    router.push(`/grateful_tokens/order-success/${res.data.data.orderInvoiceNo}`)

                    await axios.post(`/api/email/order_email`, {
                        email: email,
                        name: fullName,
                        orderId: res.data.data.orderInvoiceNo,
                        date: new Date(res.data.data.createdAt).toLocaleString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                        })
                    })


                }).catch((err) => {
                    setLoading(false)
                    toast.error("Failed to place order")
                    console.log(err);
                })}

                catch (err) {
                    setLoading(false)
                    toast.error("Failed to place order")
                    console.log(err);
                }



            
        }
        else {
            toast.error("Please fill all the fields")
        }
    }

    useEffect(()=>{
        setTotal(findSum()+60)
    })
    return (

        <Flex className={"flex flex-col lg:mt-6 mt-32 mb-40"}>
            <h1 className="font-semibold text-text_secondary lg:text-3xl text-2xl mt-10 mx-auto">
                Checkout
            </h1>
            <form className='w-full'>
                <Flex className={'flex md:flex-row flex-col justify-between mt-10'}>
                    <Flex className={'flex flex-col md:w-[55%] w-full'}>
                        {/* Billing Information */}
                        <Flex className={'flex flex-col gap-y-8'}>

                            <h3 className="font-semibold text-text_secondary lg:text-xl text-lg">Billing Information</h3>
                            <InputBox type='text' placeholder={'Full Name'} onChange={(e) => { setFullName(e.target.value) }} value={fullName}></InputBox>
                            <InputBox type='tel' placeholder={'Phone'} onChange={(e) => { setPhoneNumber(e.target.value) }} value={phone}></InputBox>
                            <InputBox type='text' placeholder={'Email'} onChange={(e) => { setEmail(e.target.value) }} value={email}></InputBox>
                            <SelectionBox placeholder={'Country'} onChange={(e) => { setCountry(e.target.value) }} options={["Bangladesh"]} value={country}></SelectionBox>
                            <SelectionBox placeholder={'City'} onChange={(e) => { setCity(e.target.value) }} options={["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barishal", "Rangpur", "Mymensingh", "Comilla", "Narayanganj"]} value={city}></SelectionBox>
                            <InputBox type='text' placeholder={'Postal Code'} onChange={(e) => { setZip(e.target.value) }} value={zip}></InputBox>
                            <InputBox type='text' placeholder={'Full Address'} onChange={(e) => { setAddress(e.target.value) }} value={address}></InputBox>
                        </Flex>

                        {/* Billing Information */}
                        <Flex className={'flex flex-col gap-y-3'}>
                            <h3 className="font-semibold text-text_secondary lg:text-xl text-lg mt-14">Payment Information</h3>
                            <Flex className={'flex items-center'}>
                                <div className='lg:w-[100px] w-[70px]'>

                                    <Image src={'/images/GratefulTokens/BKash-bKash-Logo.wine.png'} alt="bKash Logo" width={200} height={100}></Image>
                                </div>
                                <span className="font-semibold text-text_tertiary lg:text-lg text-md"> Payment Steps:</span>
                            </Flex>
                            <span className="font-medium text-text_tertiary lg:text-md text-sm">
                                •	You must pay <span className='text-text_secondary font-semibold'>৳ {findSum() + 60}</span> using <span className='text-text_secondary font-semibold'>Send Money</span> option to the number <span className='text-text_secondary font-semibold'>01726943940</span>
                            </span>
                            <span className="font-medium text-text_tertiary lg:text-md text-sm">•	Copy the Transaction Id and paste it here for verification</span>
                            <span className="font-medium text-text_tertiary lg:text-md text-sm">•	Your order will be processed once the payment is verified</span>

                            <InputBox type='text' placeholder={'Transaction Id'} onChange={(e) => { setTransactionId(e.target.value) }} value={transactionId}></InputBox>

                        </Flex>


                    </Flex>


                    {/* Order Summary */}
                    <Flex className={'flex md:w-[40%] lg:mt-0 mt-14 flex-col'}>

                        <h3 className="font-semibold text-text_secondary lg:text-xl text-lg">Order Summary</h3>
                        <List className={"mt-2 flex flex-col "}>
                            {items.map((item, index) => (
                                <ListItem
                                    className={
                                        "flex items-center justify-between py-4 border-b-2 border-slate-300"
                                    }
                                    key={index}
                                >
                                    <div className="lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]">
                                        <Image
                                            src={
                                                item.thumbnail
                                            }
                                            width={60}
                                            height={60}
                                            alt={`${item.productName} thumbnail`}
                                        />
                                    </div>
                                    <span className="text-slate-800 lg:w-[200px] w-[150px] lg:text-[15px] text-[12px] font-semibold text-wrap">
                                        {item.productName}
                                    </span>
                                    <span className="text-slate-800 lg:w-[30px] w-[15px] lg:text-[17px] text-[14px] font-semibold">
                                        x{item.quantity}
                                    </span>
                                    <span className="text-slate-800 w-[70px] text-[15px] font-semibold text-right">
                                        ৳ {item.quantity * item.price}
                                    </span>
                                    <button onClick={(e) => handleCartItemDelete(e, item.id)}>

                                        <Flex className="flex lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] bg-bg_tertiary rounded-full items-center justify-center hover:cursor-pointer">
                                            <span className="text-slate-200 lg:text-[15px] text-[10px] font-semibold">
                                                x
                                            </span>
                                        </Flex>
                                    </button>
                                </ListItem>
                            ))}
                            <ListItem className={
                                "flex items-center justify-between py-4"
                            }>
                                <span className="text-slate-800 text-[15px] font-semibold">Subtotal:</span>
                                <span className="text-slate-800 text-[15px] font-semibold text-right xl:pr-9 md:pr-5 pr-7">৳ {findSum()}</span>
                            </ListItem>
                            <ListItem className={
                                "flex items-center justify-between py-4 border-b-2 border-slate-300"
                            }>
                                <span className="text-slate-800 text-[15px] font-semibold">Delivary cost:</span>
                                <span className="text-slate-800 text-[15px] font-semibold text-right xl:pr-9 md:pr-5 pr-7">৳ 60</span>
                            </ListItem>
                        </List>
                        <Flex className={
                            "flex items-center justify-between py-4 border-b-2 border-slate-300"
                        }>
                            <span className="text-slate-800 text-[15px] font-semibold">Total:</span>
                            <span className="text-slate-800 text-[15px] font-semibold text-right xl:pr-9 md:pr-5 pr-7">৳ {total}</span>
                        </Flex>
                        <Button className={'w-[200px] mt-6'} type={"submit"} onClick={handleOrder} loading={loading}>Confirm Order</Button>
                    </Flex>
                </Flex>
            </form>

        </Flex>
    )
}

export default CheckoutInfo