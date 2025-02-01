import PuzzleLayout from "@/app/components/puzzle/PuzzleLayout";

const PUZZLE_ID = "A2";

export default function A2Puzzle() {
  return (
    <PuzzleLayout id={PUZZLE_ID}>
      <span className="text-lg font-medium">A2</span>
      <span className="text-sm text-base-content-secondary">A2 퍼즐</span>
    </PuzzleLayout>
  );
}
