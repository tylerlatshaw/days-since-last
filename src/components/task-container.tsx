"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { TaskType } from "@/app/lib/type-library";
import TaskCard from "./task-card";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Modal } from "@mui/material";

export default function TaskContainer() {

    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [formLoading, setFormLoading] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        axios.get("/api/get-tasks").then((response) => {
            console.log(response);
            setTasks(response.data);
        }).then(() => setLoading(false));
    }, []);

    const style = {
        // eslint-disable-next-line @typescript-eslint/prefer-as-const
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "30%",
        bgcolor: "#475569", //slate-600
        border: "2px solid #111827", //gray-900
        boxShadow: 24,
        borderRadius: 4
    };

    const labelStyle = "mb-2 font-semibold";
    const inputStyle = "w-full rounded border border-green-600 bg-slate-700 hover:bg-slate-800 focus:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-green-700 focus:border-green-700 px-3 py-2";

    function generateCards() {

        return tasks && tasks.map((task) => {
            return <>
                <TaskCard TaskId={task.TaskId} DisplayName={task.DisplayName} LastDate={task.LastDate} Threshold1={task.Threshold1} Threshold2={task.Threshold2} />
            </>;
        });
    }

    function loadingCard() {
        const cards = [1, 2, 3, 4];

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

    function blankCard() {
        return <>
            <div className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-2 text-center">
                <div className={"m-2 p-3 rounded-lg border-dashed border-4 border-gray-600 bg-gray-400 "}>
                    <span className="flex w-full font-bold text-2xl sm:text-xl lg:text-2xl text-center justify-center mx-auto items-center h-16 line-clamp-2 text-ellipsis"></span>

                    <div className="m-6">
                        <button className="grid place-items-center w-full h-full bg-gray-500/40 aspect-square rounded-lg border border-black text-black group hover:bg-black/30 cursor-pointer" onClick={handleOpen}>
                            <span className="text-gray-600 group-hover:text-gray-800"><AddCircleOutlineIcon fontSize="large" /></span>
                        </button>
                    </div>

                    <span className="font-extralight italic text-base">&nbsp;</span>
                </div>
            </div>
        </>;
    }

    function getModalContents() {
        return <Modal open={open} onClose={handleClose}>
            <Box sx={style}>

                <div className="flex flex-row items-center px-6 py-5">
                    <span className="grow text-xl font-semibold">Add New Task</span>
                    <button type="button" onClick={handleClose}>
                        <CloseIcon className="hover:text-slate-900" />
                    </button>
                </div>

                <form className="contact-form w-full space-y-8 p-6 border-y border-slate-700" method="POST">

                    <div className="flex flex-col">
                        <label className={labelStyle}>Task Title:</label>
                        <input id="title" type="text" placeholder="Review Project Dashboard" className={inputStyle} />
                    </div>

                    <div className="flex flex-col w-full">
                        <label className={labelStyle}>Threshold 1:</label>
                        <div className="flex flex-row items-center w-full h-10">
                            <div className="self-center h-full aspect-square bg-green-700 border border-gray-800 shadow-lg shadow-gray-700 rounded-full"></div>
                            <ArrowForwardIcon className="mx-1" />
                            <div className="self-center h-full aspect-square bg-yellow-600 mr-4 border border-gray-800 shadow-lg shadow-gray-700 rounded-full"></div>
                            <input id="threshold1" type="number" placeholder="5" className={inputStyle} />
                            <span className="ml-2 font-semibold">Days</span>
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <label className={labelStyle}>Threshold 2:</label>
                        <div className="flex flex-row items-center w-full h-10">
                            <div className="self-center h-full aspect-square bg-yellow-600 border border-gray-800 shadow-lg shadow-gray-700 rounded-full"></div>
                            <ArrowForwardIcon className="mx-1" />
                            <div className="self-center h-full aspect-square bg-red-500 mr-4 border border-gray-800 shadow-lg shadow-gray-700 rounded-full"></div>
                            <input id="threshold2" type="number" placeholder="10" className={inputStyle} />
                            <span className="ml-2 font-semibold">Days</span>
                        </div>
                    </div>

                </form>

                <div className="flex flex-row px-6 py-5">
                    <div className="grow"></div>
                    <button className="bg-red-500 hover:bg-red-600 font-semibold px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-red-700 rounded-lg border border-slate-700 shadow shadow-gray-700">Reset</button>
                    <button className="bg-green-700 hover:bg-green-800 font-semibold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-900 rounded-lg border border-slate-700 shadow shadow-gray-700">Submit</button>
                </div>

            </Box>
        </Modal>;
    }

    return <>
        <div className="flex flex-wrap flex-row justify-center bg-slate-600 w-full p-8 rounded-lg border-2 border-gray-900 shadow-lg">

            {loading ? loadingCard() : generateCards()}

            {open ? getModalContents() : null}

            {blankCard()}

        </div>
    </>;
}