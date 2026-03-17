import prisma from "../../lib/prisma";


export async function GET(){
    try{
        
        const products = await prisma.product.findMany()
        return new Response(JSON.stringify({ message: "Products received", data: products }), { status: 201 })
    }
    catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Error occured while receiving user information" }), { status: 500 });
      }

}