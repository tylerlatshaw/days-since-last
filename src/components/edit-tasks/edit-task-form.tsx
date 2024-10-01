"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { TaskType } from "@/app/lib/type-library";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SendIcon from "@mui/icons-material/Send";
import { Box, CircularProgress } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

type SubmitState = "Idle" | "Success" | "Error";
type FormInputs = {
    TaskId: string,
    DisplayName: string,
    LastDate: Date,
    Threshold1: number,
    Threshold2: number
};

export default function EditTaskForm(currentTask: TaskType) {

    const [submitState, setSubmitState] = useState<SubmitState>("Idle");
    const [responseMessage, setResponseMessage] = useState<string>("");
    const [loadingState, setLoadingState] = useState<boolean>(false);

    useEffect(() => {
        setValue("DisplayName", currentTask.DisplayName);
        setValue("TaskId", currentTask.TaskId);
        setValue("LastDate", currentTask.LastDate);
        setValue("Threshold1", currentTask.Threshold1);
        setValue("Threshold2", currentTask.Threshold2);
    });


    const {
        register,
        handleSubmit,
        reset,
        setValue
    } = useForm<FormInputs>();

    const style = {
        width: "40%",
        bgcolor: "#475569", //slate-600
        border: "2px solid #111827", //gray-900
        boxShadow: 24,
        borderRadius: 4
    };

    const labelStyle = "mb-2 font-semibold";
    const inputStyle = "w-full rounded border border-slate-800 bg-slate-700 disabled:bg-slate-500 hover:bg-slate-800 focus:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-green-700 focus:border-green-700 px-3 py-2";

    function getModalContents() {
        return <Box sx={style}>

            <form method="POST" onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-row items-center px-6 py-5">
                    <span className="grow text-xl font-semibold">Edit Task</span>
                </div>

                <div className="w-full space-y-8 p-6 border-y border-slate-700">

                    <div className="flex flex-col">
                        <label className={labelStyle}>Task ID:</label>
                        <input {...register("TaskId")} id="TaskId" type="text" placeholder="035d3c3d-d637-4841-ab41-5d0970f7d200" className={inputStyle} required disabled={true} />
                    </div>

                    <div className="flex flex-col">
                        <label className={labelStyle}>Task Title:</label>
                        <input {...register("DisplayName")} id="DisplayName" type="text" placeholder="Review Project Dashboard" className={inputStyle} required disabled={loadingState} />
                    </div>

                    <div className="flex flex-col">
                        <label className={labelStyle}>Last Date:</label>
                        <input {...register("LastDate")} id="LastDate" type="datedatetime-local" placeholder="2024-09-27T13:04:49.386Z" className={inputStyle} required disabled={loadingState} />
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
        </Box>;
    }

    const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
        setSubmitState("Idle");
        setResponseMessage("");
        setLoadingState(true);
        try {
            const { data } = await axios.post("/api/update-task", {
                TaskId: formData.TaskId,
                DisplayName: formData.DisplayName,
                LastDate: formData.LastDate,
                Threshold1: formData.Threshold1,
                Threshold2: formData.Threshold2,
            } as TaskType);

            setResponseMessage(data.message);
            setSubmitState("Success");
            reset();

            setLoadingState(false);
        } catch (e) {
            console.log(e);
            setResponseMessage("Something went wrong. Please try again.");
            setSubmitState("Error");
            setLoadingState(false);
        }
    };

    const onReset = async () => {
        reset();
        setResponseMessage("");
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

    return <>
        <div className="flex flex-wrap flex-row justify-center w-full">

            {getModalContents()}

        </div>
    </>;
}