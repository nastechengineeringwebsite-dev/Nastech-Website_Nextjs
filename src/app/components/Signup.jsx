'use client'

import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa"
import { FaEye } from "react-icons/fa"
import Flex from "./Flex";
import InputBox from "./InputBox";
import Button from "./Button";
import { toast } from "react-toastify";
import Link from "next/link";

const Signup = () => {
    let [show_password, setShow_password] = useState(false)
    let [show_confirm_pass, setShow_confirm_pass] = useState(false)

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [con_password, setConPassword] = useState('')

    let createUser = (e) => {
        e.preventDefault()
        if (password == con_password) {
            
            setName('')
            setEmail('')
            setPassword('')
            setConPassword('')

            console.log(name)
            console.log(email)
            console.log(password)
        }
        else {
            toast.error("Password not correct! Please check again")
        }
        
    }

    return (
        <form className="py-20 mb-40 w-[40%] mx-auto">
            <Flex className={"gap-y-10 flex-col"}>
                <InputBox placeholder={"Username"} type="text" value = {name} onChange = {(val)=>setName(val.target.value)}></InputBox>
                <InputBox placeholder={"Email Address"} type="email" value = {email} onChange = {(val)=>setEmail(val.target.value)}></InputBox>
                <Flex className={"relative"}>
                    <div className={"text-text_secondary hover:cursor-pointer absolute bottom-[15%] right-[4%] z-10"} onClick={() => { setShow_password(!show_password) }} >
                        {!show_password ? <FaEye /> : <FaEyeSlash />}
                    </div>
                    <InputBox placeholder={"Password"} type={show_password ? 'text' : 'password'} value = {password} onChange = {(val)=>setPassword(val.target.value)}></InputBox>
                </Flex>
                <Flex className={"relative"}>
                    <div className={"text-text_secondary hover:cursor-pointer absolute bottom-[15%] right-[4%] z-10"} onClick={() => { setShow_confirm_pass(!show_confirm_pass) }}>
                        {!show_confirm_pass ? <FaEye /> : <FaEyeSlash />}
                    </div>
                    <InputBox placeholder={"Confirm Password"} type={show_confirm_pass ? 'text' : 'password'} value = {con_password} onChange = {(val)=>setConPassword(val.target.value)}></InputBox>
                </Flex>
                <Flex className={"flex-col bg-blue-200 p-4 font-medium rounded-2xl text-slate-600"}>
                    <span>Password must include:</span>
                    <span>•	Minimum 8 characters</span>
                    <span>•	At least one number 0-9</span>
                    <span>•	Alphabet A-Z,a-z</span>
                    <span>•	At least one special characters: @#$</span>



                </Flex>
                <Button className={"mt-4"} onClick={createUser}>Create Account</Button>

                <span className="mx-auto">Already have an account? <Link className="text-text_secondary font-semibold" href="/grateful_tokens/login">Log in</Link></span>
            </Flex>


        </form>
    )
}

export default Signup