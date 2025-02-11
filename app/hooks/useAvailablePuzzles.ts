export default function useAvailablePuzzles({
  solvedPuzzleIds,
}: {
  solvedPuzzleIds: string[];
}) {
  if (solvedPuzzleIds.length === 0) {
    return {
      availablePuzzleIds: ["Z1"],
    };
  }
  if (solvedPuzzleIds.length >= 1) {
    return {
      availablePuzzleIds: ["Z1", "A1", "B1", "C1", "D1", "E1"],
    };
  }
  return {
    availablePuzzleIds: [],
  };
}

// Fix this after puzzlehunt structure is finalized
