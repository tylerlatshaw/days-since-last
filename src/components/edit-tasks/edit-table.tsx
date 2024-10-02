"use client";

import { TaskType } from "@/app/lib/type-library";
import axios from "axios";
import { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function EditTable() {

    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get("/api/get-tasks").then((response) => {
            console.log(response);
            setTasks(response.data);
        }).then(() => setLoading(false));
    }, []);

    function getDataTable() {

        const thStyle = "px-4 py-3 border border-gray-900";
        const tdStyle = "px-4 py-3 border border-gray-900";

        const formContent = tasks.map((task) => {
            return <>
                <tr key={task.TaskId}>
                    <td className={tdStyle}>{task.TaskId}</td>
                    <td className={tdStyle + " font-semibold"}>{task.DisplayName}</td>
                    <td className={tdStyle}>{new Date(task.LastDate).toLocaleDateString() + " " + new Date(task.LastDate).toLocaleTimeString()}</td>
                    <td className={tdStyle + " text-center"}>{task.Threshold1} Days</td>
                    <td className={tdStyle + " text-center"}>{task.Threshold2} Days</td>
                    <td className={tdStyle}>
                        <div className="flex flex-row justify-center">
                            <button onClick={() => onDelete(task.TaskId)}>
                                <span className="underline cursor-pointer font-semibold">Delete</span>
                            </button>
                            <span className="mx-2">|</span>
                            <Link href={"/edit-tasks/" + task.TaskId}>
                                <button>
                                    <span className="underline cursor-pointer font-semibold">Edit</span>
                                </button>
                            </Link>
                        </div>
                    </td>
                </tr>
            </>;
        });

        return <>
            <table className="w-full text-nowrap overflow-x-auto">
                <thead className="bg-slate-800">
                    <tr>
                        <th className={thStyle + " w-96"}>Task ID</th>
                        <th className={thStyle}>Task Name</th>
                        <th className={thStyle}>Last Date</th>
                        <th className={thStyle}>
                            <div className="flex flex-row items-center justify-center w-full h-6">
                                <div className="self-center h-full aspect-square bg-green-700 border border-gray-800 shadow-lg shadow-gray-700 rounded-full"></div>
                                <ArrowForwardIcon className="mx-1" />
                                <div className="self-center h-full aspect-square bg-yellow-600 border border-gray-800 shadow-lg shadow-gray-700 rounded-full"></div>
                            </div>
                        </th>
                        <th className={thStyle}>
                            <div className="flex flex-row items-center justify-center w-full h-6">
                                <div className="self-center h-full aspect-square bg-yellow-600 border border-gray-800 shadow-lg shadow-gray-700 rounded-full"></div>
                                <ArrowForwardIcon className="mx-1" />
                                <div className="self-center h-full aspect-square bg-red-500 border border-gray-800 shadow-lg shadow-gray-700 rounded-full"></div>
                            </div>
                        </th>
                        <th className={thStyle}>Action</th>
                    </tr>
                </thead>
                <tbody className="bg-slate-700">
                    {formContent}
                </tbody>
            </table>
        </>;
    }

    function getLoadingTable() {
        const rows = [1, 2, 3, 4, 5, 6];
        const thStyle = "px-4 py-4 border border-gray-900";
        const tdStyle = "px-4 py-4 border border-gray-900";

        const formContent = rows.map((row) => {
            return <tr key={row}>
                <td className={tdStyle}><div className="animate-pulse rounded h-4 w-84 bg-slate-400"></div></td>
                <td className={tdStyle}><div className="animate-pulse rounded h-4 w-48 bg-slate-400"></div></td>
                <td className={tdStyle}><div className="animate-pulse rounded h-4 w-44 bg-slate-400"></div></td>
                <td className={tdStyle}><div className="animate-pulse rounded h-4 w-16 bg-slate-400 mx-auto"></div></td>
                <td className={tdStyle}><div className="animate-pulse rounded h-4 w-20 bg-slate-400 mx-auto"></div></td>
                <td className={tdStyle}><div className="animate-pulse rounded h-4 w-28 bg-slate-400 mx-auto"></div></td>
            </tr>;
        });

        return <>
            <table className="w-full text-nowrap overflow-x-auto">
                <thead className="bg-slate-800">
                    <tr>
                        <th className={thStyle + " w-96"}><div className="animate-pulse rounded h-4 w-16 mx-auto bg-slate-400"></div></th>
                        <th className={thStyle}><div className="animate-pulse rounded h-4 w-24 mx-auto bg-slate-400"></div></th>
                        <th className={thStyle}><div className="animate-pulse rounded h-4 w-20 mx-auto bg-slate-400"></div></th>
                        <th className={thStyle}><div className="animate-pulse rounded h-4 w-20 mx-auto bg-slate-400"></div></th>
                        <th className={thStyle}><div className="animate-pulse rounded h-4 w-20 mx-auto bg-slate-400"></div></th>
                        <th className={thStyle}><div className="animate-pulse rounded h-4 w-16 mx-auto bg-slate-400"></div></th>
                    </tr>
                </thead>
                <tbody className="bg-slate-700">
                    {formContent}
                </tbody>
            </table>
        </>;
    }

    const onDelete = async (TaskId: string) => {
        try {
            await axios.post("/api/delete-task", { TaskId });
            setLoading(true);

            // Refetch the tasks
            await axios.get("/api/get-tasks").then((response) => {
                console.log(response);
                setTasks(response.data);
            }).then(() => setLoading(false));
        } catch (e) {
            console.log(e);
        }
    };

    return <>
        <div className="w-full text-nowrap overflow-x-auto">

            {loading ? getLoadingTable() : getDataTable()}

        </div>
    </>;
}