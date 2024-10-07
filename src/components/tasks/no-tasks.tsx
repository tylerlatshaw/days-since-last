import FolderOffIcon from "@mui/icons-material/FolderOff";
import Link from "next/link";

export default function NoTasks() {

    return <>
        <div className="flex flex-wrap flex-row justify-center w-full text-center">
            <div className="bg-cyan-400/10 border-2 border-cyan-600 rounded-lg px-12 py-8">
                <div className="text-3xl font-bold mb-4">No Tasks Found</div>
                <div className="flex justify-center w-full pt-6 pb-2">
                    <FolderOffIcon sx={{
                        height: "64px",
                        width: "64px"
                    }} />
                </div>
                <div className="py-8">You do not have any active tasks - create one now!</div>
                <div className="flex justify-center w-full">
                    <Link href="/add-task">
                        <button className="bg-green-700 hover:bg-green-800 font-semibold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-900 rounded-lg border border-slate-700 shadow shadow-gray-700">Add Task</button>
                    </Link>
                </div>
            </div>
        </div>
    </>;
}