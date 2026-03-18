import { data } from "autoprefixer";
import prisma from "../../../lib/prisma";


export async function POST(req) {
    try {
      const body = await req.json();
        
      const uid = body.id

      const exsistingCart = await prisma.cartItem.findUnique({
        where: {
            
                userId_productId: {
                  userId : uid,
                  productId : body.productId,
                  
                },
        }
      })

      if (exsistingCart) {
        
        const updatedCart = await prisma.cartItem.update({
          where: {
            id: exsistingCart.id
          },
          data: {
            quantity: exsistingCart.quantity + body.quantity
          }
        })

        return new Response(
          JSON.stringify({ message: "Cart updated successfully", data: updatedCart }),
          { status: 200 }
        );
      }

      const newCart = await prisma.cartItem.create({
        data: {
          userId: uid,
          productId: body.productId,
          thumbnail: body.thumbnail,
          quantity: body.quantity,
          price: body.price,
          productName: body.productName
        }
      })
      
      return new Response(
        JSON.stringify({ message: "Cart created successfully", data: newCart }),
        { status: 200 }
      );

    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: "Product creation failed" }), {
        status: 500,
      });
    }
  }
  