import { jwtVerify } from "jose";
import { cookies } from "next/headers";


export async function GET(){
    try{
        
        const token = (await cookies()).get("token")?.value;
        if (!token){
            return new Response(JSON.stringify({ message: "User logged out" , data: null}), { status: 200 });
        }
        const secret = new TextEncoder().encode(process.env.JSONWEBTOKEN_SECRET);
        const payload = await jwtVerify(token, secret)

        if (payload){

            return new Response(JSON.stringify({ message: "User exist" , data: payload}), { status: 200 });
        }
        else{
            return new Response(JSON.stringify({ message: "User logged out" , data: null}), { status: 200 });
        }
    }catch(error){
        if (error.code === "ERR_JWT_EXPIRED") {
            return new Response(
              JSON.stringify({ message: "Token expired", data: null }),
              { status: 200 }
            );
          }
          
        console.log(error)
        return new Response(JSON.stringify({ message: "Error occured" }), { status: 500 });
    }
}