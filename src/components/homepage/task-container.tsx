"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { TaskType } from "@/lib/type-library";
import TaskCard from "./task-card";
import { useUser } from "@clerk/nextjs";
import NoTasks from "./no-tasks";

export default function TaskContainer() {

    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { user } = useUser();

    const UserId = user?.id;

    useEffect(() => {
        axios.post("/api/get-tasks", {
            "UserId": UserId
        }).then((response) => {
            console.log(response);
            setTasks(response.data);
        }).then(() => setLoading(false));
    }, [UserId]);

    function generateCards() {

        if (tasks.length < 1) {
            return <NoTasks />;
        }

        return tasks && tasks.map((task) => {
            return <>
                <TaskCard UserId={UserId} TaskId={task.TaskId} DisplayName={task.DisplayName} LastDate={task.LastDate} Threshold1={task.Threshold1} Threshold2={task.Threshold2} />
            </>;
        });
    }

    function loadingCard() {
        const cards = [1, 2, 3, 4, 5];

        return cards && cards.map((card) => {
            return <div className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-2 text-center" key={card}>
                <div className="m-2 p-3 rounded-lg border border-gray-800 shadow-xl shadow-gray-700 bg-gray-400">
                    <div className="animate-pulse bg-gray-500 w-[75%] mx-auto h-5 rounded mt-4">&nbsp;</div>
                    <div className="animate-pulse bg-gray-500 w-[40%] mx-auto h-5 rounded mt-2">&nbsp;</div>

                    <div className="m-6">
                        <div className="animate-pulse grid place-items-center content-center w-full bg-gray-500/40 aspect-square rounded-lg border border-black text-black">
                            <div className="animate-pulse bg-gray-500 w-1/4 mx-auto h-12 rounded mt-2">&nbsp;</div>
                            <div className="animate-pulse bg-gray-500 w-1/2 mx-auto h-8 rounded mt-3">&nbsp;</div>
                        </div>
                    </div>

                    <div className="animate-pulse bg-gray-500 w-[80%] mx-auto h-3 rounded mb-3">&nbsp;</div>
                </div>
            </div>;
        });
    }

    return <>
        {loading ? loadingCard() : generateCards()}
    </>;
}