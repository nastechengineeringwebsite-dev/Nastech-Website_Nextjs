"use client"

import React, { useState } from 'react'
import Container from './Container'
import InputBox from './InputBox'
import Flex from './Flex'
import { FaEyeSlash } from "react-icons/fa"
import { FaEye } from "react-icons/fa"
import Button from './Button'
import Link from 'next/link'
import { toast } from "react-toastify";

const Login = () => {

    let [show_password, setShow_password] = useState(false)
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let loginUser = (e) => {
        e.preventDefault()
        if (!password) {

            setEmail('')
            setPassword('')

            console.log(email)
            console.log(password)
        }
        else {
            toast.error("Credentials not correct! Please check again")
        }

    }
    return (

        <form className="py-20 mb-40 w-[40%] mx-auto">
            <Flex className={"gap-y-10 flex-col"}>

                <InputBox placeholder={"Email Address"} type="email" value={email} onChange={(val) => setEmail(val.target.value)}></InputBox>
                <Flex className={"relative"}>
                    <div className={"text-text_secondary hover:cursor-pointer absolute bottom-[15%] right-[4%] z-10"} onClick={() => { setShow_password(!show_password) }} >
                        {!show_password ? <FaEye /> : <FaEyeSlash />}
                    </div>
                    <InputBox placeholder={"Password"} type={show_password ? 'text' : 'password'} value={password} onChange={(val) => setPassword(val.target.value)}></InputBox>
                </Flex>

                <Button className={"mt-4"} onClick={loginUser}>Login</Button>

                <span className="mx-auto">Don't have an account? <Link className="text-text_secondary font-semibold" href="/grateful_tokens/sign_up">Sign Up</Link></span>
            </Flex>


        </form>
    )
}

export default Login