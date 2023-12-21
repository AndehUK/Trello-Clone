import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { DeleteBoard } from "./board";

const OrganizationIDPage = async () => {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <form action={create}>
        <input
          id="title"
          name="title"
          required
          placeholder="enter a board title"
          className="border-input border p-1"
        />
        <Button>Submit</Button>
      </form>
      <div className="space-y-2">
        {boards.map((board) => (
          <DeleteBoard key={board.id} id={board.id} title={board.title} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIDPage;
