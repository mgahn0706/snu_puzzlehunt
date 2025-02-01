export interface User {
  name: string;
  email: string;
  id: string;
  solvedPuzzleIds: string[];
  memberNames: string[];
}

export interface Puzzle {
  id: string;
  title: string;
  flavorText: string;
  question: string;
  hashedAnswer: string;
  partialAnswers?: string[];
  creator: string;
}

export interface Category {
  id: string;
  title: string;
  icon: React.ComponentType;
  puzzleIds: string[];
}
