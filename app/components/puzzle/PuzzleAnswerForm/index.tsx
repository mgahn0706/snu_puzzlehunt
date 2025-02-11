"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import CryptoJS from "crypto-js";

import { toast } from "@/app/hooks/use-toast";
import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { PUZZLES } from "@/app/fixtures/puzzles";
import usePostSolvePuzzle from "@/app/hooks/api/usePostSolvedPuzzle";

const FormSchema = z.object({
  answer: z.string(),
});

const KOREAN_REGEX = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

export function PuzzleAnswerForm({ puzzleId }: { puzzleId: string }) {
  const puzzle = PUZZLES[2025][puzzleId];

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      answer: "",
    },
  });

  const { postSolvedPuzzleId } = usePostSolvePuzzle();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!data.answer) {
      toast({
        title: "정답을 입력해주세요! 🤔",
      });
      return;
    }

    const isAllLetterKorean = data.answer
      .replace(/\s/g, "")
      .split("")
      .every((char) => KOREAN_REGEX.test(char));

    if (!isAllLetterKorean) {
      toast({
        title: "정답은 한글로 입력해주세요! 🇰🇷",
      });
      return;
    }

    const hashedSubmittedAnswer = CryptoJS.SHA256(
      data.answer.toUpperCase().replace(/\s/g, "")
    ).toString();

    if (hashedSubmittedAnswer === puzzle.hashedAnswer) {
      toast({
        title: "정답입니다! 🎉",
      });
      postSolvedPuzzleId({ puzzleId });
      return;
    }

    if (puzzle.partialAnswers?.includes(hashedSubmittedAnswer)) {
      toast({
        title: "정답에 근접하고 있어요! 🧠",
      });
      return;
    }

    toast({
      title: "정답이 아닙니다! 😢",
    });
  }

  return (
    <section className="py-4 px-4 bg-base-200 rounded-xl w-96">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="answer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{puzzle.question}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">제출</Button>
        </form>
      </Form>
    </section>
  );
}
