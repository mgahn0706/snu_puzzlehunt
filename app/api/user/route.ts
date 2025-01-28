import prisma from "../../lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  if (!body.email || !body.password || !body.name) {
    return new Response(
      JSON.stringify({
        code: "VALIDATION_ERROR",
        message: "Email, password, and name are required.",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const existingUser = await prisma.user.findFirst({
    where: { email: body.email },
  });

  if (existingUser) {
    return new Response(
      JSON.stringify({
        code: "EMAIL_EXISTS",
        message:
          "An account with this email already exists. Please use a different email.",
      }),
      { status: 403, headers: { "Content-Type": "application/json" } }
    );
  }

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...result } = user;

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

