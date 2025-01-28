import prisma from "../../lib/prisma";

export async function GET() {
  try {
    // Fetch all users from the database
    const users = await prisma.user.findMany({
      select: {
        name: true,
        solvedPuzzleIds: true,
        memberNames: true,
      },
    });

    // Map the users to include only the desired fields
    const result = users.map((user) => ({
      name: user.name,
      solvedPuzzleCount: user.solvedPuzzleIds.length,
      memberNames: user.memberNames,
    }));

    // Return the filtered result
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new Response(
      JSON.stringify({
        code: "INTERNAL_SERVER_ERROR",
        message: "An error occurred while fetching users.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
