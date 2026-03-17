import prisma from "../../../lib/prisma";


export async function GET(req, { params }) {
  try {
    
    const { id } = await params;

    const product = await prisma.product.findUnique({
      where: { id: id },
    });
    
    return new Response(JSON.stringify({ message: "Product found", data: product }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Product finding failed" }), {
      status: 500,
    });
  }
}
