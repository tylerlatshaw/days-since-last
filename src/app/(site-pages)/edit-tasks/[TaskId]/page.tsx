"use client";

import { TaskType } from "@/lib/type-library";
import axios from "axios";
import { useEffect, useState } from "react";
import EditTaskForm from "@/components/edit-tasks/edit-task-form";
import EditLoadingForm from "@/components/edit-tasks/edit-loading-form";
import TaskNotFound from "@/components/edit-tasks/task-not-found";
import RestrictedPage from "@/components/global/restricted-page";

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
        <RestrictedPage />
        
        <div className="w-2/5">
            {
                loading ?
                    <EditLoadingForm />
                    : currentTask !== undefined ?
                        <EditTaskForm TaskId={currentTask!.TaskId} DisplayName={currentTask!.DisplayName} LastDate={currentTask!.LastDate} Threshold1={currentTask!.Threshold1} Threshold2={currentTask!.Threshold2} />
                        : <TaskNotFound />
            }
        </div>
    </>;
}