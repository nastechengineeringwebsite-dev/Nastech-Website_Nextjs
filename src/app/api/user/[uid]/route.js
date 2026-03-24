import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt"


export async function PUT(req, { params }) {
  try {
    const { uid } = await params;
    const body = await req.json();

    const user_update = await prisma.user.update({
      where: { id: uid },
      data: {
        ...(body.username && { username: body.username }),
        ...(body.email && { email: body.email }),
        ...(body.password && {
          password: await bcrypt.hash(body.password, 10),
        }),}
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
