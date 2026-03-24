import React from 'react'
import Container from '../../components/Container'
import PasswordChange from '../../components/PasswordChange'
import AnimatePage from '../../components/AnimatePage'
import prisma from '../../lib/prisma'
import { redirect } from 'next/navigation'



const page = async ({searchParams}) => {
  const param = await searchParams
  const link = decodeURIComponent(param.reset)
  console.log(link)
  const otp = await prisma.otp.findFirst({where: {resetLink: link}}) || null

  if (!otp || otp.resetLink !== link){
    redirect("/grateful_tokens/login")
  }
  return (
    
    <Container>
        <AnimatePage>
            <PasswordChange email={otp.email}/>
        </AnimatePage>
    </Container>
  )
}

export default page