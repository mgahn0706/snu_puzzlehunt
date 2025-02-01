import { verifyJwt } from "@/app/lib/jwt";
import prisma from "../../lib/prisma";

interface RequestBody {
  id: string;
  solvedPuzzleId: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const accessToken = request.headers.get("authorization");

  if (!accessToken || !verifyJwt(accessToken.split(" ")[1])) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    });
  }

  const id = await Number(body.id);

  const user = await prisma.user.findUnique({
    where: { id: id },
  });

  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), {
      status: 404,
    });
  }

  if (user.solvedPuzzleIds.includes(body.solvedPuzzleId)) {
    return new Response(JSON.stringify({ error: "Already solved" }), {
      status: 409,
    });
  }

  const updatedUser = await prisma.user.update({
    where: { id: id },
    data: {
      solvedPuzzleIds: {
        push: body.solvedPuzzleId,
      },
    },
  });

  return new Response(JSON.stringify(updatedUser), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
