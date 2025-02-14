import { Book, Cog, Globe, Music, School, Sprout } from "lucide-react";
import { Category, Puzzle } from "../types";

export const PUZZLES: Record<string, Record<string, Puzzle>> = {
  2025: {
    Z1: {
      id: "Z1",
      title: "입학시험",
      flavorText:
        "서울대학교 정문에 도착했습니다. 새내기인 당신은 서울대학교에 입학할 생각에 마음이 설렙니다. 막상 정문에 가보니 주변에 아무 것도 없습니다. 당신은 당황했지만, 누군가가 남긴 퍼즐을 풀어 정문을 통과한 후 해야할 일을 찾으려고 합니다.",
      hashedAnswer: "f9f2d7f8a7f6e3b7a6d",
      creator: "안민규",
      question: "정문을 통과한 후 해야할 것은 무엇인가요?",
    },
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
    B1: {
      id: "B1",
      title: "전기정보공학부",
      flavorText:
        "전기정보공학부에 들어서니 알 수 없는 기호들이 눈에 보이기 시작합니다. 당신은 이 기호들을 해석해 전기정보공학부의 비밀을 알아내야 합니다.",
      hashedAnswer:
        "632c17535cd00829b97bf42e475898549b778b133dc3bd1aec4b2541730c9c96",
      creator: "안민규",
      question: "What is the answer, again?",
      partialAnswers: [
        "94ee059335e587e501cc4bf90613e0814f00a7b08bc7c648fd865a2af6a22cc2",
      ],
    },
    C1: {
      id: "C1",
      title: "의문의 기타리스트",
      flavorText:
        "고즈넉한 분위기의 카페에서 어떤 기타리스트가 연주를 하고 있습니다. 그의 연주는 매우 아름답습니다. 그러나 그의 연주를 듣는 도중, 당신은 이상한 기분을 느끼기 시작합니다. 그의 연주에는 무언가 숨겨진 것이 있습니다. 당신은 그의 연주를 듣고 그의 비밀을 풀어내야 합니다.",
      hashedAnswer:
        "632c17535cd00829b97bf42e475898549b778b133dc3bd1aec4b2541730c9c96",
      creator: "안민규",
      question: "그가 올려다 본 것은 무엇인가요?",
      partialAnswers: [
        "94ee059335e587e501cc4bf90613e0814f00a7b08bc7c648fd865a2af6a22cc2",
      ],
    },
    D1: {
      id: "D1",
      title: "과거 현재 미래",
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
    E1: {
      id: "E1",
      title: "낮과 밤이",
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
      id: "Z",
      title: "서울대학교 정문",
      icon: School,
      puzzleIds: ["Z1", "Z-META"],
    },
    {
      id: "A",
      title: "인문대학",
      icon: Book,
      puzzleIds: ["A1", "A2", "A3", "A4", "A5", "A6", "A-META"],
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
    {
      id: "D",
      title: "사회과학대학",
      icon: Globe,
      puzzleIds: ["D1", "D2", "D3", "D4", "D5", "D-META"],
    },
    {
      id: "E",
      title: "자연과학대학",
      icon: Sprout,
      puzzleIds: ["E1", "E2", "E3", "E4", "E5", "E6", "E-META"],
    },
  ],
};
