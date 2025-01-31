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
  description: string;
  hashedAnswer: string;
  creator: string;
}
