import prisma from "../../../lib/prisma";


export async function POST(req){
   
    try {
        
        const {oid, status} = await req.json();
        const updatedOrder = await prisma.order.update({
            where: {id: oid},
            data: {
                status: status
            }
        })
        return new Response(JSON.stringify({message: "Order status updated", data: updatedOrder}), {status: 200})
        
    } catch (error) {

        console.error(err);
        return new Response(JSON.stringify({error: "Order status update failed"}), {status: 500})
        
    }
    
}