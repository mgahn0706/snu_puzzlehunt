import { User } from "@/app/types";
import { useSession } from "next-auth/react";
import { useEffect, useState, useCallback } from "react";

interface UserResponse {
  data?: User;
  loading: boolean;
  refetch: () => Promise<void>;
}

export default function useGetUserById({ id }: { id?: number }): UserResponse {
  const { data: session } = useSession();
  const [data, setData] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/user/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user.accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      setData(await response.json());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [id, session?.user.accessToken]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return {
    data,
    loading,
    refetch: fetchUser,
  };
}
