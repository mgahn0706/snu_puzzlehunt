import PuzzleLayout from "@/app/components/puzzle/PuzzleLayout";

const PUZZLE_ID = "Z1";

export default function Z1Puzzle() {
  return (
    <PuzzleLayout id={PUZZLE_ID}>
      <span className="text-lg font-medium">입학 시험</span>
      <span className="text-sm text-base-content-secondary">
        이 문제는 퍼즐헌트 입학 시험입니다.
      </span>
    </PuzzleLayout>
  );
}
