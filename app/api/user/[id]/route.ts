import { verifyJwt } from "@/app/lib/jwt";
import { prisma } from "@/app/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const accessToken = request.headers.get("authorization");
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    });
  }
  // Parse the query parameter from the request URL
  const id = Number(params.id);

  // Validate the query parameter
  if (!id) {
    return new Response(
      JSON.stringify({
        code: "VALIDATION_ERROR",
        message: "ID is required as a query parameter.",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    // Fetch the user by email
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        name: true,
        solvedPuzzleIds: true,
        memberNames: true,
      },
    });

    // If user is not found
    if (!user) {
      return new Response(
        JSON.stringify({
          code: "USER_NOT_FOUND",
          message: "No user found with the provided email.",
        }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Return the result
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response(
      JSON.stringify({
        code: "INTERNAL_SERVER_ERROR",
        message: "An error occurred while fetching the user.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
