"use client"

import React, { useState } from 'react'
import Flex from './Flex'
import { InputOTP } from '@heroui/react'
import Button from './Button'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const OtpPage = ({ email }) => {

    const router = useRouter()

    const [otp, setOtp] = useState("")
    const [loading, setLoading] = useState(false)
    const [invalid, setInvalid] = useState(false)

    const handleVerification = async () => {
        setLoading(true)
        await axios.post('/api/otp/verify', { email: email, userOtp: otp }).then((res) => {
            if (res.data.verified) {
                setInvalid(false)
                router.push(`/grateful_tokens/password-change?reset=${res.data.resetLink}`)
            }
            else{
                setInvalid(true)
            }

        })
        setLoading(false)
    }
    return (
        <Flex className={'flex items-center justify-center my-60'}>
            <Flex className={'flex w-[268px] flex-col gap-y-5'}>
                <h2 className='text-text_primary font-bold text-xl text-left'>Verification</h2>
                <Flex className={'flex flex-col gap-y-3 items-center relative'}>

                    <span className='text-gray-800 font-medium text-[12px] text-wrap'>Enter the 6 digit code sent to {email}</span>
                    <InputOTP maxLength={6}
                        value={otp}
                        onChange={(e) => { setOtp(e) }}
                        isInvalid={invalid}>
                        <InputOTP.Group>
                            <InputOTP.Slot className='border-gray-300 border-[2px]' index={0} />
                            <InputOTP.Slot className='border-gray-300 border-[2px]' index={1} />
                            <InputOTP.Slot className='border-gray-300 border-[2px]' index={2} />
                            <InputOTP.Slot className='border-gray-300 border-[2px]' index={3} />
                            <InputOTP.Slot className='border-gray-300 border-[2px]' index={4} />
                            <InputOTP.Slot className='border-gray-300 border-[2px]' index={5} />
                        </InputOTP.Group>
                    </InputOTP>
                    { invalid && <span className='absolute text-red-500 font-medium text-[12px] text-wrap bottom-[-25px] left-0'>Invalid code</span>}
                </Flex>
                <Button className={"mt-5"} onClick={handleVerification} loading={loading}>Verify</Button>
            </Flex>
        </Flex>
    )
}

export default OtpPage