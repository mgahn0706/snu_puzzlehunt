import { verifyJwt } from "@/app/lib/jwt";
import prisma from "../../lib/prisma";

interface RequestBody {
  id: string;
  newTeamMembers: string[];
}

export async function PUT(request: Request) {
  const body: RequestBody = await request.json();

  const accessToken = request.headers.get("authorization");

  if (!accessToken || !verifyJwt(accessToken.split(" ")[1])) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    });
  }

  const id = await Number(body.id);

  const user = await prisma.user.update({
    where: { id },
    data: {
      memberNames: body.newTeamMembers,
    },
  });

  const { password, ...result } = user;

  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
