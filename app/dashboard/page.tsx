import KanbanBoard from "@/components/kanban-board";
import { getSession } from "@/lib/auth/auth";
import connectDB from "@/lib/db";
import { initializeUserBoard } from "@/lib/init-user-board";
import { Board } from "@/lib/models";
import { redirect } from "next/navigation";

export const instant = false;

const DashboardPage = async () => {
  const session = await getSession();

  if (!session?.user) {
    redirect("/sign-in");
  }

  await connectDB();

  let board = await Board.findOne({
    userId: session.user.id,
    name: "Job Hunt",
  }).populate({
    path: "columns",
    populate: {
      path: "jobApplication",
    },
  });

  if (!board) {
    const initialized = await initializeUserBoard(session.user.id);
    board = await Board.findById(initialized._id).populate({
      path: "columns",
      populate: {
        path: "jobApplication",
      },
    });
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black">
            {board?.name ?? "Job Hunt"}
          </h1>
          <p className="text-gray-600">Track your job applications</p>
        </div>
        {board && (
          <KanbanBoard
            board={JSON.parse(JSON.stringify(board))}
            userId={session.user.id}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
