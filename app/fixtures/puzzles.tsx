import {
  Book,
  Cog,
  Cpu,
  Globe,
  Languages,
  Music,
  Palette,
  Sprout,
  Users,
} from "lucide-react";
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
    {
      id: "A",
      title: "인문대학",
      icon: Book,
      puzzleIds: ["A1", "A2", "A3"],
    },
    {
      id: "B",
      title: "공과대학",
      icon: Cog,
      puzzleIds: ["B1", "B2", "B3", "B4", "B5", "B6", "B-META"],
    },
    {
      id: "C",
      title: "음악대학",
      icon: Music,
      puzzleIds: ["C1", "C2", "C3", "C4", "C5", "C-META"],
    },
    { id: "D", title: "사회과학대학", icon: Globe, puzzleIds: ["D1", "D2"] },
    { id: "E", title: "자연과학대학", icon: Sprout, puzzleIds: ["E1", "E2"] },
  ],
};
