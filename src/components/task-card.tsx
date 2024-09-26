"use client";

import { TaskType } from "@/app/lib/type-library";
import { Button } from "@mui/material";
import axios from "axios";

type offsetType = {
    value: number
    modifier: string
}

export async function TaskCard(task: TaskType) {

    const {
        TaskId,
        DisplayName,
        LastDate,
        Threshold1,
        Threshold2
    } = task;

    const dateTimeOffset: offsetType = calculateDateOffset();
    const colorScheme: string = calculateColorScheme();

    function calculateColorScheme() {

        if (dateTimeOffset.modifier === "Days") {
            if (dateTimeOffset.value >= Threshold2) {
                return " bg-red-500";
            } else if (dateTimeOffset.value >= Threshold1 && dateTimeOffset.value <= Threshold2) {
                return " bg-yellow-600";
            }
        }

        return " bg-green-700";
    }

    function calculateDateOffset() {
        let modifier;
        const currentDate: Date = new Date();
        const previousDate: Date = new Date(LastDate);

        // Time Difference in Milliseconds
        const milliDiff: number = currentDate.getTime() - previousDate.getTime();

        // Total number of seconds in the difference
        const totalSeconds = Math.floor(milliDiff / 1000);

        // Total number of minutes in the difference
        const totalMinutes = Math.floor(totalSeconds / 60);

        // Total number of hours in the difference
        const totalHours = Math.floor(totalMinutes / 60);

        if (totalSeconds < 60) {
            if (totalSeconds === 1)
                modifier = "Second";
            else
                modifier = "Seconds";
            return { "value": totalSeconds, "modifier": modifier };
        } else if (totalMinutes < 60) {
            if (totalMinutes === 1)
                modifier = "Minute";
            else
                modifier = "Minutes";
            return { "value": totalMinutes, "modifier": modifier };
        } else if (totalHours < 24) {
            if (totalHours === 1)
                modifier = "Hour";
            else
                modifier = "Hours";
            return { "value": totalHours, "modifier": modifier };
        } else {
            if (Math.floor(totalHours / 24) === 1)
                modifier = "Day";
            else
                modifier = "Days";
            return { "value": Math.floor(totalHours / 24), "modifier": modifier };
        }
    }

    const onSubmit = async () => {

        try {
            await axios.post("/api/update-tasks", {
                TaskId: TaskId,
                DisplayName: DisplayName,
                LastDate: new Date,
                Threshold1: Threshold1,
                Threshold2: Threshold2
            } as TaskType);
        } catch (e) {
            console.log(e);
        }
    };

    return <div className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-2 text-center">
        <div className={"m-2 p-3 rounded-lg border border-gray-800 shadow-xl shadow-gray-700 " + colorScheme}>
            <span className="flex w-full font-bold text-2xl sm:text-xl lg:text-2xl text-center justify-center mx-auto items-center h-16 line-clamp-2 text-ellipsis">{DisplayName}</span>

            <div className="m-6">
                <Button className="flex flex-col w-full bg-white/40 aspect-square rounded-lg border border-black text-black hover:bg-white/60 cursor-pointer" onClick={() => { onSubmit(); }}>
                    <span className="text-5xl sm:text-3xl lg:text-5xl mb-2">{dateTimeOffset.value}</span>
                    <span className="text-2xl">{dateTimeOffset.modifier}</span>
                </Button>
            </div>

            <span className="font-extralight italic text-base">Last Date: {new Date(LastDate).toLocaleDateString() + " " + new Date(LastDate).toLocaleTimeString()}</span>
        </div>
    </div>;
}