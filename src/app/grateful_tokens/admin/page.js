import prisma from '@/app/lib/prisma'
import AdminPage from '../../components/AdminPage'
import AnimatePage from '../../components/AnimatePage'
import Container from '../../components/Container'
import React from 'react'

const page = async () => {

  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
      <Container>
          <AnimatePage>
              <AdminPage orders={orders}/>
          </AnimatePage>
    </Container>
  )
}

export default page