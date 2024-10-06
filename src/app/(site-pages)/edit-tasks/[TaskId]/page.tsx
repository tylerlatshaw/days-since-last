"use client";

import { TaskType } from "@/lib/type-library";
import axios from "axios";
import { useEffect, useState } from "react";
import EditTaskForm from "@/components/edit-tasks/edit-task-form";
import EditLoadingForm from "@/components/edit-tasks/edit-loading-form";
import TaskNotFound from "@/components/edit-tasks/task-not-found";
import { RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/nextjs";

export default function Page({ params }: { params: { TaskId: string } }) {

    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { user } = useUser();

    const UserId = user?.id;

    useEffect(() => {
        axios.post("/api/get-tasks-by-id", {
            "UserId": UserId,
            "TaskId": params.TaskId
        }).then((response) => {
            setTasks(response.data);
        })
            .then(() => setLoading(false));
    }, [UserId, params.TaskId]);

    const currentTask: TaskType | undefined = tasks.find((task) => {
        return task.TaskId === params.TaskId;
    });

    return <>
        <SignedOut>
            <RedirectToSignIn />
        </SignedOut>

        <SignedIn>
            <div className="w-2/5">
                {
                    loading ?
                        <EditLoadingForm />
                        : currentTask !== undefined ?
                            <EditTaskForm UserId={currentTask!.UserId} TaskId={currentTask!.TaskId} DisplayName={currentTask!.DisplayName} LastDate={currentTask!.LastDate} Threshold1={currentTask!.Threshold1} Threshold2={currentTask!.Threshold2} />
                            : <TaskNotFound />
                }
            </div>
        </SignedIn>
    </>;
}