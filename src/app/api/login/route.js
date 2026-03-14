import { SignJWT } from "jose";
import prisma from "../../lib/prisma";
import { cookies } from "next/headers";
import bcrypt from "bcrypt"
export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found", user: false, pass_valid: true }), {
        status: 200,
      });
    }

    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      return new Response(JSON.stringify({ message: "Invalid Password", user: true, pass_valid: false }), {
        status: 200,
      });
    }

    const secret = new TextEncoder().encode(process.env.JSONWEBTOKEN_SECRET);
    const token = await new SignJWT({ id: user.id })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(secret);

    (await cookies()).set("token", token);

    return new Response(JSON.stringify({ message: "User Logged in", user: true, pass_valid: true }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Error while finding" }), {
      status: 500,
    });
  }
}
