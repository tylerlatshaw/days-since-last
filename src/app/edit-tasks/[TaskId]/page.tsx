"use client";

import { TaskType } from "@/app/lib/type-library";
import axios from "axios";
import { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import EditTaskForm from "@/components/edit-tasks/edit-task-form";
import EditLoadingForm from "@/components/edit-tasks/edit-loading-form";
import TaskNotFound from "@/components/edit-tasks/task-not-found";

export default function Page({ params }: { params: { TaskId: string } }) {

    const [tasks, setTasks] = useState<TaskType[]>([]);
    // const [currentTask, setCurrentTask] = useState<TaskType>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get("/api/get-tasks").then((response) => {
            setTasks(response.data);
        })
            // .then(() => setCurrentTask(tasks.find((task) => { return task.TaskId === params.TaskId; })))
            .then(() => setLoading(false));
    }, []);

    const currentTask: TaskType | undefined = tasks.find((task) => {
        return task.TaskId === params.TaskId;
    });

    return <>
        <nav className="flex flex-row items-center w-full mx-auto text-center mt-8">

            <h1 className="mx-auto text-6xl font-semibold">Days Since Last</h1>

            <div className="z-10 absolute right-8">
                <Link href={"/edit-tasks"}>
                    <button className="flex flex-row items-center w-36 px-4 py-3 bg-green-700 rounded-lg text-nowrap">
                        <div className="mx-auto">
                            <ArrowBackIcon /> <span className="ml-1">Go Back</span>
                        </div>
                    </button>
                </Link>
            </div>

        </nav>

        <main className="flex flex-row mt-8">
            <div className="flex flex-wrap flex-row justify-center w-full bg-slate-600 p-8 rounded-lg border-2 border-gray-900 shadow-lg">
                <div className="w-2/5">
                    {
                        loading ?
                            <EditLoadingForm />
                            : currentTask !== undefined ?
                                <EditTaskForm TaskId={currentTask!.TaskId} DisplayName={currentTask!.DisplayName} LastDate={currentTask!.LastDate} Threshold1={currentTask!.Threshold1} Threshold2={currentTask!.Threshold2} />
                                : <TaskNotFound />
                    }
                </div>
            </div>
        </main>
    </>;
}