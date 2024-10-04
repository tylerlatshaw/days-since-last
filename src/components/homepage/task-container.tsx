"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { TaskType } from "@/lib/type-library";
import TaskCard from "./task-card";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { Box, CircularProgress, Modal } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

type SubmitState = "Idle" | "Success" | "Error";
type FormInputs = {
    DisplayName: string,
    Threshold1: number,
    Threshold2: number
};

export default function TaskContainer() {

    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [submitState, setSubmitState] = useState<SubmitState>("Idle");
    const [responseMessage, setResponseMessage] = useState<string>("");
    const [loadingState, setLoadingState] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true); setResponseMessage(""); };
    const handleClose = () => setOpen(false);

    useEffect(() => {
        axios.get("/api/get-tasks").then((response) => {
            console.log(response);
            setTasks(response.data);
        }).then(() => setLoading(false));
    }, []);

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FormInputs>();

    const style = {
        // eslint-disable-next-line @typescript-eslint/prefer-as-const
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "40%",
        bgcolor: "#475569", //slate-600
        border: "2px solid #111827", //gray-900
        boxShadow: 24,
        borderRadius: 4
    };

    const labelStyle = "mb-2 font-semibold";
    const inputStyle = "w-full rounded border border-slate-800 bg-slate-700 hover:bg-slate-800 focus:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-green-700 focus:border-green-700 px-3 py-2";

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
                    <span className="flex w-full font-bold text-2xl sm:text-xl lg:text-2xl text-center justify-center mx-auto items-center mt-3 h-16 line-clamp-2 text-ellipsis"></span>

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

                <form method="POST" onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-row items-center px-6 py-5">
                        <span className="grow text-xl font-semibold">Add New Task</span>
                        <button type="button" onClick={handleClose}>
                            <CloseIcon className="hover:text-slate-900" />
                        </button>
                    </div>

                    <div className="w-full space-y-8 p-6 border-y border-slate-700">

                        <div className="flex flex-col">
                            <label className={labelStyle}>Task Title:</label>
                            <input {...register("DisplayName")} id="DisplayName" type="text" placeholder="Review Project Dashboard" className={inputStyle} required disabled={loadingState} />
                        </div>

                        <div className="flex flex-col w-full">
                            <label className={labelStyle}>Threshold 1:</label>
                            <div className="flex flex-row items-center w-full h-10">
                                <div className="self-center h-full aspect-square bg-green-700 border border-gray-800 shadow-lg shadow-gray-700 rounded-full"></div>
                                <ArrowForwardIcon className="mx-1" />
                                <div className="self-center h-full aspect-square bg-yellow-600 mr-4 border border-gray-800 shadow-lg shadow-gray-700 rounded-full"></div>
                                <input {...register("Threshold1")} id="Threshold1" type="number" placeholder="5" className={inputStyle} required disabled={loadingState} />
                                <span className="ml-2 font-semibold">Days</span>
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <label className={labelStyle}>Threshold 2:</label>
                            <div className="flex flex-row items-center w-full h-10">
                                <div className="self-center h-full aspect-square bg-yellow-600 border border-gray-800 shadow-lg shadow-gray-700 rounded-full"></div>
                                <ArrowForwardIcon className="mx-1" />
                                <div className="self-center h-full aspect-square bg-red-500 mr-4 border border-gray-800 shadow-lg shadow-gray-700 rounded-full"></div>
                                <input {...register("Threshold2")} id="Threshold2" type="number" placeholder="10" className={inputStyle} required disabled={loadingState} />
                                <span className="ml-2 font-semibold">Days</span>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-row items-center px-6 py-5">
                        <div className="grow">
                            <span className={`font-bold text-md  ${GetResponseCssClass()}`}>{responseMessage}</span>
                        </div>

                        <button type="reset" onClick={() => onReset()} className="bg-red-500 hover:bg-red-600 font-semibold px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-red-700 rounded-lg border border-slate-700 shadow shadow-gray-700" disabled={loadingState}>
                            <span className="flex items-center">
                                Reset
                            </span>
                        </button>

                        <button type="submit" className="bg-green-700 hover:bg-green-800 font-semibold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-900 rounded-lg border border-slate-700 shadow shadow-gray-700" disabled={loadingState}>
                            <span className="flex items-center">
                                {loadingState ? <>Submit&nbsp;<CircularProgress size={16} sx={{ color: "white" }} /></> : <>Submit&nbsp;<SendIcon className="text-lg flex items-center" /></>}
                            </span>
                        </button>
                    </div>

                </form>
            </Box>
        </Modal>;
    }

    const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
        setSubmitState("Idle");
        setResponseMessage("");
        setLoadingState(true);
        try {
            const { data } = await axios.post("/api/add-task", {
                TaskId: uuidv4(),
                DisplayName: formData.DisplayName,
                LastDate: new Date,
                Threshold1: formData.Threshold1,
                Threshold2: formData.Threshold2,
            } as TaskType);

            setResponseMessage(data.message);
            setSubmitState("Success");
            await sleep(3000);
            setLoadingState(false);
            setOpen(false);

            setLoading(true);
            await axios.get("/api/get-tasks").then((response) => {
                console.log(response);
                setTasks(response.data);
            }).then(() => setLoading(false));
            setLoading(false);
        } catch (e) {
            console.log(e);
            setResponseMessage("Something went wrong. Please try again.");
            setSubmitState("Error");
            setLoadingState(false);
        }
    };

    const onReset = async () => {
        reset();
    };

    function GetResponseCssClass() {
        if (submitState === "Success") {
            return "positive-response";
        }

        if (submitState === "Error") {
            return "negative-response";
        }

        return "neutral-response";
    }

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return <>
        {loading ? loadingCard() : generateCards()}

        {open ? getModalContents() : null}

        {blankCard()}
    </>;
}