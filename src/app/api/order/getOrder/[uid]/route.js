import prisma from "../../../../lib/prisma";




export async function GET(req, {params}){
    const {uid} = await params
    try{
        const orders = await prisma.user.findMany({
            where: {
                userId: uid
            }
        })
        return new Response(JSON.stringify({ message: "Orders received", data: orders }), { status: 200 })
    }
    catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Error occured while receiving user information" }), { status: 500 });
      }

}