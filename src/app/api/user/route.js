import { cookies } from "next/headers";
import prisma from "../../lib/prisma"; 
import { SignJWT } from "jose";
import bcrypt from "bcrypt"

export async function POST(req) {
  try {
    const body = await req.json();
    const hashed_pass = await bcrypt.hash(body.password,10)

    const user = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashed_pass
      },
    })
    const secret = new TextEncoder().encode(process.env.JSONWEBTOKEN_SECRET);
    const token = await new SignJWT({id:user.id}).setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(secret);

    (await cookies()).set('token',token)

    return new Response(JSON.stringify({ message: "User created successfully" }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "User creation failed" }), { status: 500 });
  }
}

export async function GET(){
    try{
        const users = await prisma.user.findMany()
        return new Response(JSON.stringify({ message: "users received" }), { status: 201 })
    }
    catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Error occured while receiving user information" }), { status: 500 });
      }

}