'use client'

import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa"
import { FaEye } from "react-icons/fa"
import Flex from "./Flex";
import InputBox from "./InputBox";
import Button from "./Button";
import { toast } from "react-toastify";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import validatePassword from "../utils/validatePassword";
import validateEmail from "../utils/validateEmail";


const Signup = () => {
    const router = useRouter()
    let [show_password, setShow_password] = useState(false)
    let [show_confirm_pass, setShow_confirm_pass] = useState(false)

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [con_password, setConPassword] = useState('')

    let [loading, setLoading] =  useState(false)

    let {userSignedIn, setUserSignedIn} = useAuth()


    let createUser = async (e) => {
        e.preventDefault()
        if (!validatePassword(password)){
            toast.error("Password do not match the required criteria")
            return
        }

        if (!validateEmail(email)){
            toast.error("Invalid email address")
            return
        }

        if (password == con_password) {
            
            setLoading(true)
            setName('')
            setEmail('')
            setPassword('')
            setConPassword('')

            const response = await axios.post('/api/user',{
                username: name,
                email,
                password
            }).then(async (res)=>{
                setLoading(false)
                if (res.status == 201){
                    toast.success("Account created successfully")
                    setUserSignedIn(res.data.data)
                    router.push("/grateful_tokens/account")
                    await axios.post(`/api/email/registration_email`, {email: res.data.data.email, name: res.data.data.username});
                }
                else{
                    
                    toast.error("Error Occured while creating account")
                }
            }).catch((error)=>{
                setLoading(false)
                toast.error("Error Occured while creating account")
            })
        }
        else {
            setLoading(false)
            toast.error("Password not correct! Please check again")
        }
        
    }

    return (
        <form className="py-20 mb-40 lg:w-[40%] md:w-[60%] md:max-w-[400px] w-[90%]  max-w-[350px] lg:mt-0 mt-28 mx-auto">
            <Flex className={"flex lg:gap-y-10 gap-y-7 flex-col"}>
                <InputBox placeholder={"Username"} type="text" value = {name} onChange = {(val)=>setName(val.target.value)}></InputBox>
                <InputBox placeholder={"Email Address"} type="email" value = {email} onChange = {(val)=>setEmail(val.target.value)}></InputBox>
                <Flex className={"relative"}>
                    <div className={"text-text_secondary hover:cursor-pointer absolute bottom-[50%] translate-y-[50%] right-[4%] z-10"} onClick={() => { setShow_password(!show_password) }} >
                        {!show_password ? <FaEye /> : <FaEyeSlash />}
                    </div>
                    <InputBox placeholder={"Password"} type={show_password ? 'text' : 'password'} value = {password} onChange = {(val)=>setPassword(val.target.value)}></InputBox>
                </Flex>
                <Flex className={"relative"}>
                    <div className={"text-text_secondary hover:cursor-pointer absolute bottom-[50%] translate-y-[50%] right-[4%] z-10"} onClick={() => { setShow_confirm_pass(!show_confirm_pass) }}>
                        {!show_confirm_pass ? <FaEye /> : <FaEyeSlash />}
                    </div>
                    <InputBox placeholder={"Confirm Password"} type={show_confirm_pass ? 'text' : 'password'} value = {con_password} onChange = {(val)=>setConPassword(val.target.value)}></InputBox>
                </Flex>
                <Flex className={"flex flex-col gap-y-2 bg-blue-200 p-4 font-medium md:rounded-2xl rounded-xl text-slate-600 md:text-sm text-xs"}>
                    <span>Password must include:</span>
                    <span>•	Minimum 8 characters</span>
                    <span>•	At least one number 0-9</span>
                    <span>•	Alphabet A-Z,a-z</span>
                    <span>•	At least one special characters: @#$</span>



                </Flex>
                <Button className={"mt-4"} onClick={createUser} loading = {loading} type="submit">Create Account</Button>

                <span className="mx-auto text-sm">Already have an account? <Link className="text-text_secondary font-semibold" href="/grateful_tokens/login">Log in</Link></span>
            </Flex>


        </form>
    )
}

export default Signup