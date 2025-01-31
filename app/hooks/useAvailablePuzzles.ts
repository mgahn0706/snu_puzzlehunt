export default function useAvailablePuzzles({
  solvedPuzzleIds,
}: {
  solvedPuzzleIds: string[];
}) {
  if (solvedPuzzleIds.length === 0) {
    return {
      availablePuzzleIds: ["A1"],
    };
  }
  return ["A1", "B1"];
}

// Fix this after puzzlehunt structure is finalized
