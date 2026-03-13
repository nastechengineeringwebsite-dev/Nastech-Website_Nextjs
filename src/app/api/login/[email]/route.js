import { SignJWT } from "jose";
import prisma from "../../../lib/prisma"
import { cookies } from "next/headers";


export async function GET(req, {params}){
    try{
        const {email} = await params

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (user){
            
            const secret = new TextEncoder().encode(process.env.JSONWEBTOKEN_SECRET);
            const token = await new SignJWT({id:user.id}).setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('1h')
            .sign(secret);

            (await cookies()).set('token',token)

            return new Response(
                JSON.stringify({ message: "User found" , data: user}),
                { status: 200 })
        }
        else{
            return new Response(
                JSON.stringify({ message: "User not found" }),
                { status: 200 })
        }
    }catch(error){
        console.log(error)
        return new Response(
            JSON.stringify({ message: "Error while finding" }),
            { status: 500 })
    }
}