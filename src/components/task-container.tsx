import { TaskType } from "@/app/lib/type-library";
import { TaskCard } from "./task-card";
import { BlankCard } from "./blank-card";

export async function TaskContainer() {

    async function getData() {
        const res = await fetch(process.env.BASE_URL + "/api/get-tasks", {
            cache: "no-store"
        });
        const data = await res.json();

        return data;
    }

    async function generateCards() {
        const data: TaskType[] = await getData();

        return data && data.map((task) => {
            return <>
                <TaskCard TaskId={task.TaskId} DisplayName={task.DisplayName} LastDate={task.LastDate} Threshold1={task.Threshold1} Threshold2={task.Threshold2} />
            </>;
        });
    }
    
    return <>
        <div className="flex flex-wrap flex-row justify-center bg-slate-600 w-full p-8 rounded-lg border-2 border-gray-900 shadow-lg">
            {generateCards()}
            <BlankCard />
        </div>
    </>;
}