import prisma from "../../../lib/prisma";

export async function GET(req, { params }) {
  try {
    const { uid } = await params;

    const user = await prisma.user.findUnique({
      where: { id: uid },
    });
    
    return new Response(JSON.stringify({ message: "User found" }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "User finding failed" }), {
      status: 500,
    });
  }
}
