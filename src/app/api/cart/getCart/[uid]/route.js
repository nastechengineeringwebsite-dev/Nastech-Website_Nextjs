import prisma from "../../../../lib/prisma";



export async function GET(req, {params}){
    try{
        const {uid} = await params
        const cartItem = await prisma.cartItem.findMany({
            where:{
                userId: uid
            }
        })
        if (!cartItem){
            return new Response(JSON.stringify({ message: "Cart not found" }), { status: 404 })
        }
        return new Response(JSON.stringify({ message: "Cartitems received", data: cartItem }), { status: 201 })
    }
    catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Error occured while receiving cart information" }), { status: 500 });
      }

}