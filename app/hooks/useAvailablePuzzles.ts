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
  if (solvedPuzzleIds.length >= 1) {
    return {
      availablePuzzleIds: ["A1", "A2"],
    };
  }
  return {
    availablePuzzleIds: [],
  };
}

// Fix this after puzzlehunt structure is finalized
