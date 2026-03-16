import AdminPage from '../../components/AdminPage'
import AnimatePage from '../../components/AnimatePage'
import Container from '../../components/Container'
import React from 'react'

const page = () => {
  return (
      <Container>
          <AnimatePage>
              <AdminPage/>
          </AnimatePage>
    </Container>
  )
}

export default page