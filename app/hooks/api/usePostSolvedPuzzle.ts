import { User } from "@/app/types";
import { useSession } from "next-auth/react";
import { useEffect, useState, useCallback } from "react";

interface UserResponse {
  postSolvedPuzzleId: ({ puzzleId }: { puzzleId: string }) => Promise<void>;
  loading: boolean;
}

export default function usePostSolvePuzzle(): UserResponse {
  const { data: session } = useSession();
  const [loading, setLoading] = useState<boolean>(true);

  const postSolvedPuzzleId = useCallback(
    async ({ puzzleId }: { puzzleId: string }) => {
      if (!puzzleId) return;
      setLoading(true);
      try {
        const response = await fetch(`/api/solve-puzzle`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user.accessToken}`,
          },
          body: JSON.stringify({
            id: session?.user.id,
            solvedPuzzleId: puzzleId,
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [session?.user.accessToken]
  );

  return {
    postSolvedPuzzleId,
    loading,
  };
}
