import AccountProfile from '@/app/components/AccountProfile'
import AnimatePage from '@/app/components/AnimatePage'
import Container from '@/app/components/Container'
import React from 'react'

const page = () => {
  return (
      <Container>
          <AnimatePage>
              <AccountProfile/>
          </AnimatePage>
    </Container>
  )
}

export default page