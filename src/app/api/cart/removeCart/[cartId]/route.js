import prisma from "../../../../lib/prisma";


export async function DELETE(req, { params }) {
    try {
      const { cartId } = await params;
      await prisma.cartItem.delete({
        where: { id: cartId },
      });
      return new Response(
        JSON.stringify({ message: "Cart Item deleted successfully" }),
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: "Cart Item removation failed" }), {
        status: 500,
      });
    }
  }