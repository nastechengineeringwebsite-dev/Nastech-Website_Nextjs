
import prisma from "../../../lib/prisma";

export async function POST(req, {params}){
    
    try{
        const body = await req.json()
        const otp = await prisma.otp.findUnique({
            where: {
                email: body.email
            }
        })
        if (!otp){
            return new Response(JSON.stringify({ message: "Otp not found", verified: false }), { status: 201 })
        }

        if (otp.otpCode !== Number(body.userOtp)){
            return new Response(JSON.stringify({ message: "Otp not verified", verified: false }), { status: 201 })
        }
        
        return new Response(JSON.stringify({ message: "Otp found", verified: true, resetLink: otp.resetLink }), { status: 201 })
    }
    catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Error occured while receiving otp information" }), { status: 500 });
    }
}