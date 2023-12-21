"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

const CreateBoard = z.object({
  title: z.string(),
});

export async function create(formData: FormData) {
  const { title } = CreateBoard.parse({
    title: formData.get("title"),
  });

  const newBoard = await db.board.create({
    data: {
      title,
    },
  });

  revalidatePath("/org/org_2YSbiTrjcsoqObuWaEwRHmlaaAc");
}
