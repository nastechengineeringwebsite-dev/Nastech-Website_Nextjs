import prisma from "../../../lib/prisma";

export async function PUT(req, { params }) {
  try {
    const { uid } = await params;
    const body = await req.json();
    const user_update = await prisma.user.update({
      where: { id: uid },
      data: {
        username: body.username,
        email: body.email,
        password: body.password
      },
    });
    return new Response(
      JSON.stringify({ message: "User updated successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "User update failed" }), {
      status: 500,
    });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { uid } = await params;
    await prisma.user.delete({
      where: { id: uid },
    });
    return new Response(
      JSON.stringify({ message: "User deleted successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "User removation failed" }), {
      status: 500,
    });
  }
}
