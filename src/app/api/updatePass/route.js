import prisma from "../../lib/prisma"
import bcrypt from "bcrypt"

export async function PUT(req){
    try {
        const body = await req.json()
        
        const user_update = await prisma.user.update({
            where: { email: body.email },
            data: {
                password: await bcrypt.hash(body.password, 10),
            },
        });
        await prisma.otp.delete({where: {email: body.email}})
        
        return new Response(JSON.stringify({ message: "Password updated successfully" }), { status: 201 });
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ error: "Password update failed" }), { status: 500 });
    }
}