import { Cpu, Languages, Palette, Sprout, Users } from "lucide-react";
import { Category, Puzzle } from "../types";

export const PUZZLES: Record<string, Record<string, Puzzle>> = {
  2025: {
    A1: {
      id: "A1",
      title: "Test Puzzle",
      flavorText:
        "This is a test puzzle. The description will be shown here. Answer is 'test'.",
      hashedAnswer:
        "94ee059335e587e501cc4bf90613e0814f00a7b08bc7c648fd865a2af6a22cc2",
      creator: "안민규",
      question: "What is the answer?",
    },
    A2: {
      id: "A2",
      title: "Another Test Puzzle",
      flavorText:
        "This is another test puzzle. It's a bit harder than the first one. Answer is 'test2'. \n Flavor text is over, but this is for testing the line break. The flavor text can be longer than the question.",
      hashedAnswer:
        "632c17535cd00829b97bf42e475898549b778b133dc3bd1aec4b2541730c9c96",
      creator: "안민규",
      question: "What is the answer, again?",
      partialAnswers: [
        "94ee059335e587e501cc4bf90613e0814f00a7b08bc7c648fd865a2af6a22cc2",
      ],
    },
  },
};

export const CATEGORIES: Record<string, Category[]> = {
  2025: [
    { id: "A", title: "언어와 문학", icon: Languages, puzzleIds: ["A1", "A2"] },
    { id: "B", title: "문화와 예술", icon: Palette, puzzleIds: ["B1", "B2"] },
    { id: "C", title: "인간과 사회", icon: Users, puzzleIds: ["C1", "C2"] },
    { id: "D", title: "자연과 기술", icon: Cpu, puzzleIds: ["D1", "D2"] },
    { id: "E", title: "생명과 환경", icon: Sprout, puzzleIds: ["E1", "E2"] },
  ],
};
