import React from 'react'
import Container from '../../components/Container'
import PasswordChange from '../../components/PasswordChange'
import AnimatePage from '../../components/AnimatePage'


const page = async ({searchParams}) => {
  const param = await searchParams
  const email = decodeURIComponent(param.email)
  return (
    
    <Container>
        <AnimatePage>
            <PasswordChange email={email}/>
        </AnimatePage>
    </Container>
  )
}

export default page