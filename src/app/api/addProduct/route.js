import prisma from "../../lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();

    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        thumbnail: body.thumbnail,
        basePrice: body.basePrice,
        length: body.length,
        width: body.width,
        weight: body.weight,
        material: body.material,
      },
    });

    return new Response(
      JSON.stringify({ message: "Product created successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Product creation failed" }), {
      status: 500,
    });
  }
}
