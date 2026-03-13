import AccountProfile from '../../components/AccountProfile'
import AnimatePage from '../../components/AnimatePage'
import Container from '../../components/Container'
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