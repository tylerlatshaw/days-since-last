import TaskContainer from "@/components/homepage/task-container";
import EditIcon from "@mui/icons-material/Edit";

import Link from "next/link";

export default async function Home() {

  return (<>
    <div className="z-10 absolute right-8">
      <Link href={"/edit-tasks"}>
        <button className="flex flex-row items-center w-36 px-4 py-3 bg-green-700 rounded-lg text-nowrap">
          <div className="mx-auto">
            <EditIcon /> <span className="ml-1">Edit Tasks</span>
          </div>
        </button>
      </Link>
    </div>

    <TaskContainer />
  </>
  );
}