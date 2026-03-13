import { cookies } from "next/headers";
import prisma from "../../lib/prisma";
import { jwtVerify } from "jose";


export async function GET(){
    try{
        
        const token = (await cookies()).get("token")?.value;
        const secret = new TextEncoder().encode(process.env.JSONWEBTOKEN_SECRET);
        const payload = await jwtVerify(token, secret)

        const user = await prisma.user.findUnique({
            where: {id: payload.payload.id}
        })

        return new Response(JSON.stringify({ message: "User found" , data: user}), { status: 200 });
    }
    catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "User finding failed" }), { status: 500 });
      }    

}