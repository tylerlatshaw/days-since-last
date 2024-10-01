import TaskContainer from "@/components/homepage/task-container";
import EditIcon from "@mui/icons-material/Edit";

import Link from "next/link";

export default async function Home() {

  return (
    <>
      <nav className="flex flex-row items-center w-full mx-auto text-center mt-8">

        <h1 className="mx-auto text-6xl font-semibold">Days Since Last</h1>

        <div className="z-10 absolute right-8">
          <Link href={"/edit-tasks"}>
            <button className="flex flex-row items-center w-32 px-4 py-3 bg-green-700 rounded-lg text-nowrap">
              <div className="mx-auto">
                <EditIcon /> <span className="ml-1">Edit Tasks</span>
              </div>
            </button>
          </Link>
        </div>

      </nav>

      <main className="flex flex-row mt-8">

        <TaskContainer />

      </main>
    </>
  );
}