import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  
  if (!token) {
    return NextResponse.redirect(new URL("/grateful_tokens/login", req.url));
  }

  try {
    
    const secret = new TextEncoder().encode(process.env.JSONWEBTOKEN_SECRET);
    await jwtVerify(token, secret);

    
    return NextResponse.next();

  } catch (err) {
    return NextResponse.redirect(new URL("/grateful_tokens/login", req.url));
  }

}

export const config = {
  matcher: ["/grateful_tokens/account/:path*", "/grateful_tokens/admin/:path*"],
};
