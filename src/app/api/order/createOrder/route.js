import prisma from "../../../lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      userId,
      fullName,
      email,
      phone,
      country,
      city,
      address,
      zip,
      transactionId,
      items,
      total,
    } = body;

    const orderInvoiceId =
  "NAS" +
  new Date().getTime().toString().slice(-3) +
  Math.random().toString(36).substring(2, 5).toUpperCase();

    const order = await prisma.order.create({
      data: {
        userId,
        fullName,
        email,
        phone,
        country,
        city,
        address,
        zip,
        transactionId,
        total,
        orderInvoiceNo: orderInvoiceId,
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            productName: item.productName,
            price: item.price,
            quantity: item.quantity,
          })),
        },
      },
    });


    await prisma.cartItem.deleteMany({
        where: {
          userId: userId,
        },
      });

    return new Response(JSON.stringify({message: "Order created successfully", data: order}), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ error: "Order creation failed" }), { status: 500 });
  }
}
