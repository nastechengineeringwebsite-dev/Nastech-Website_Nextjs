import { cookies } from 'next/headers'
import AccountProfile from '../../components/AccountProfile'
import AnimatePage from '../../components/AnimatePage'
import Container from '../../components/Container'
import React from 'react'
import prisma from '@/app/lib/prisma'
import { jwtDecrypt, jwtVerify } from 'jose'

const page = async () => {
  
    const token = (await cookies()).get("token")?.value;
    const secret = new TextEncoder().encode(process.env.JSONWEBTOKEN_SECRET);
    const payload = await jwtVerify(token, secret)

    const user = await prisma.user.findUnique({
        where: {id: payload.payload.id}
    })

    const orders = await prisma.order.findMany({
        where: {
            userId: user.id
        }
    })

    // return new Response(JSON.stringify({ message: "User found" , data: user, orders: orders}), { status: 200 });
// }
// catch (error) {
//     console.error(error);
//     // return new Response(JSON.stringify({ error: "User finding failed" }), { status: 500 });
//   }    

  return (
      <Container>
          <AnimatePage>
              <AccountProfile user={user} order={orders}/>
          </AnimatePage>
    </Container>
  )
}

export default page