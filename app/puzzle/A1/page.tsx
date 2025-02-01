import PuzzleLayout from "@/app/components/puzzle/PuzzleLayout";

const PUZZLE_ID = "A1";

export default function A1Puzzle() {
  return (
    <PuzzleLayout id={PUZZLE_ID}>
      <span className="text-lg font-medium">A1</span>
      <span className="text-sm text-base-content-secondary">A1 퍼즐</span>
    </PuzzleLayout>
  );
}
