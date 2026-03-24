"use client"

import React, { useState } from 'react'
import Button from './Button'
import InputBox from './InputBox'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Flex from './Flex'
import { toast } from 'react-toastify'
import validatePassword from "../utils/validatePassword";
import axios from 'axios'
import { useRouter } from 'next/navigation'

const PasswordChange = ({ email }) => {

    const router = useRouter()

    let [show_password, setShow_password] = useState(false)
    let [show_confirm_pass, setShow_confirm_pass] = useState(false)

    let [password, setPassword] = useState('')
    let [con_password, setConPassword] = useState('')

    let [loading, setLoading] = useState(false)

    const handlePassChange = async (e)=>{
        e.preventDefault()
        if (!validatePassword(password)){
            toast.error("Password do not match the required criteria")
            return
        }
        

        if (password === con_password){
            setLoading(true)
            const response = await axios.put(`/api/updatePass`,{
                email: email,
                password
            }).then(async (res)=>{
                setLoading(false)
                
                if (res.status === 201){
                    toast.success("Password updated successfully")
                    router.push("/grateful_tokens/login")
                }
                else{
                    toast.error("Password update failed")
                }
            }).catch((err)=>{
                console.log(err)
                setLoading(false)
                toast.error("Password update failed")
                
            })
    }}
    
    return (
        
        <form className="py-20 mb-40 lg:w-[40%] md:w-[60%] md:max-w-[400px] w-[90%]  max-w-[350px] lg:mt-0 mt-28 mx-auto">
        <Flex className={"flex lg:gap-y-10 gap-y-7 flex-col"}>
            <Flex className={"relative"}>
                <div className={"text-text_secondary hover:cursor-pointer absolute bottom-[50%] translate-y-[50%] right-[4%] z-10"} onClick={() => { setShow_password(!show_password) }} >
                    {!show_password ? <FaEye /> : <FaEyeSlash />}
                </div>
                <InputBox placeholder={"New Password"} type={show_password ? 'text' : 'password'} value={password} onChange={(val) => setPassword(val.target.value)}></InputBox>
            </Flex>
            <Flex className={"relative"}>
                <div className={"text-text_secondary hover:cursor-pointer absolute bottom-[50%] translate-y-[50%] right-[4%] z-10"} onClick={() => { setShow_confirm_pass(!show_confirm_pass) }}>
                    {!show_confirm_pass ? <FaEye /> : <FaEyeSlash />}
                </div>
                <InputBox placeholder={"Confirm Password"} type={show_confirm_pass ? 'text' : 'password'} value={con_password} onChange={(val) => setConPassword(val.target.value)}></InputBox>
            </Flex>
            <Flex className={"flex flex-col gap-y-2 bg-blue-200 p-4 font-medium md:rounded-2xl rounded-xl text-slate-600 md:text-sm text-xs"}>
                <span>Password must include:</span>
                <span>•	Minimum 8 characters</span>
                <span>•	At least one number 0-9</span>
                <span>•	Alphabet A-Z,a-z</span>
                <span>•	At least one special characters: @#$</span>

            

            </Flex>
            <Button className={"mt-4"} onClick={handlePassChange} loading={loading} type="submit">Change Password</Button>
        </Flex>
        </form>
    )
}

export default PasswordChange