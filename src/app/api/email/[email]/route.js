
import prisma from "../../../lib/prisma"


export async function GET(req, {params}){
    try{
        const {email} = await params

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (user){
            
            return new Response(
                JSON.stringify({ message: "User found" , data: "valid"}),
                { status: 200 })
        }
        else{
            return new Response(
                JSON.stringify({ message: "User not found", data: "not-valid" }),
                { status: 200 })
        }
    }catch(error){
        console.log(error)
        return new Response(
            JSON.stringify({ message: "Error while finding email" }),
            { status: 500 })
    }
}