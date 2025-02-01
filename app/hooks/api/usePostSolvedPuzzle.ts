import { User } from "@/app/types";
import { useSession } from "next-auth/react";
import { useEffect, useState, useCallback } from "react";

interface UserResponse {
  postSolvedPuzzleId: ({ puzzleId }: { puzzleId: string }) => Promise<void>;
  loading: boolean;
}

export default function usePostSolvePuzzle({
  userId,
}: {
  userId?: number;
}): UserResponse {
  const { data: session } = useSession();
  const [loading, setLoading] = useState<boolean>(true);

  const postSolvedPuzzleId = useCallback(
    async ({ puzzleId }: { puzzleId: string }) => {
      if (!userId || !puzzleId) return;
      setLoading(true);
      try {
        const response = await fetch(`/api/solve-puzzle`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user.accessToken}`,
          },
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
    [userId, session?.user.accessToken]
  );

  return {
    postSolvedPuzzleId,
    loading,
  };
}
