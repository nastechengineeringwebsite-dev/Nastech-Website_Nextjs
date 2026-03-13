
import { cookies } from "next/headers";


export async function GET(){
    try{
              
        const cookieStore = await cookies()
        cookieStore.delete("token")

        return new Response(JSON.stringify({ message: "User logged out"}), { status: 200 });
        
    }catch(error){
        console.log(error)
        return new Response(JSON.stringify({ message: "Error occured" }), { status: 500 });
    }
}