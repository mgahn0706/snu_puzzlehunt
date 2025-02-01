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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { PUZZLES } from "@/app/fixtures/puzzles";
import usePostSolvePuzzle from "@/app/hooks/api/usePostSolvedPuzzle";
import { useSession } from "next-auth/react";

const FormSchema = z.object({
  answer: z.string(),
});

export function PuzzleAnswerForm({ puzzleId }: { puzzleId: string }) {
  const puzzle = PUZZLES[2025][puzzleId];
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      answer: "",
    },
  });

  const { postSolvedPuzzleId, loading } = usePostSolvePuzzle();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const hashedSubmittedAnswer = CryptoJS.SHA256(
      data.answer.toUpperCase()
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
        title: "Keep going! 🧠",
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
