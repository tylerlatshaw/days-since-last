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
                <tr>
                    <td className={tdStyle}>{task.TaskId}</td>
                    <td className={tdStyle + " font-semibold"}>{task.DisplayName}</td>
                    <td className={tdStyle}>{task.LastDate.toLocaleString()}</td>
                    <td className={tdStyle}>{task.Threshold1} Days</td>
                    <td className={tdStyle}>{task.Threshold2} Days</td>
                    <td className={tdStyle}>
                        <div className="flex flex-row">
                            <button onClick={() => onDelete(task.TaskId)}>
                                <span className="underline cursor-pointer">Delete</span>
                            </button>
                            <span className="mx-2">|</span>
                            <Link href={"/edit-tasks/" + task.TaskId}>
                                <button>
                                    <span className="underline cursor-pointer">Edit</span>
                                </button>
                            </Link>
                        </div>
                    </td>
                </tr>
            </>;
        });

        return <>
            <table className="w-full">
                <thead className="bg-slate-800">
                    <tr>
                        <th className={thStyle}>Task ID</th>
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

        return null;
    }

    const onDelete = async (TaskId: string) => {
        try {
            await axios.post("/api/delete-task", {TaskId});
        } catch (e) {
            console.log(e);
        }
    };

    return <>
        <div className="w-full">

            {loading ? getLoadingTable() : getDataTable()}

        </div>
    </>;
}