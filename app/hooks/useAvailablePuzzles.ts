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
  return {
    availablePuzzleIds: ["A1, A2"],
  };
}

// Fix this after puzzlehunt structure is finalized
