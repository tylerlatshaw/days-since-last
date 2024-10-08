/* eslint-disable @next/next/no-img-element */
"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LoginIcon from "@mui/icons-material/Login";
import { Merriweather } from "next/font/google";

const merriweatherFont = Merriweather({
    weight: ["400"],
    subsets: ["cyrillic"]
});

const stepStyles = "flex items-center justify-center rounded-full aspect-square border-4 border-cyan-500 bg-cyan-500/20 w-16 h-16 pb-1 text-4xl font-semibold md:-rotate-[8deg] " + merriweatherFont.className;

export default function HomepageContainer() {

    return <>
        <div className="flex flex-col md:flex-row items-stretch w-full py-6">

            <div className="flex justify-center w-full md:w-1/2 px-24">
                <div className="text-4xl font-bold">
                    <img src={process.env.NEXT_PUBLIC_BASE_URL + "/static/homepage-computer.png"} alt="Days Since Last Website" className="filter drop-shadow-[16px_16px_16px_rgba(0,0,0,0.35)]" />
                </div>
            </div>

            <div className="flex flex-col items-stretch w-full md:w-1/2 px-0 md:px-16">
                <div className="flex flex-col justify-center items-center w-full space-y-8">

                    <h1 className="text-4xl font-bold text-center w-full">
                        Welcome to Days Since Last!
                    </h1>

                    <div className="text-2xl font-semibold text-center w-full">
                        Days Since Last is an easy-to-use task tracking system geared towards ensuring that you complete your recurring tasks on time.
                    </div>

                    <div className="flex flex-col items-start space-y-12 px-16">

                        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 w-fit">
                            <div className={stepStyles}>1</div>
                            <div className="flex flex-col text-center md:text-left">
                                <div className="font-semibold text-lg text-cyan-200">Sign Up for an Account</div>
                                <div className="font-base text-lg">Create a free, secure account using your Google account<sup className="italic font-light text-sm text-gray-300">*</sup></div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 w-fit">
                            <div className={stepStyles}>2</div>
                            <div className="flex flex-col text-center md:text-left">
                                <div className="font-semibold text-lg text-cyan-200">Create Some Tasks and Add Thresholds</div>
                                <div className="font-base text-lg">Add in a few recurring tasks and alert thresholds</div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 w-fit">
                            <div className={stepStyles}>3</div>
                            <div className="flex flex-col text-center md:text-left">
                                <div className="font-semibold text-lg text-cyan-200">Complete Your Tasks on Time</div>
                                <div className="font-base text-lg">Once you complete a task, click it to reset the timer</div>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-center w-full">
                        <SignedOut>
                            <div className="m-2">
                                <Link href={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL!}>
                                    <button className="flex items-center bg-green-700 hover:bg-green-800 font-semibold pr-4 pl-6 py-2 focus:outline-none focus:ring-2 focus:ring-green-900 rounded-lg border border-slate-700 shadow shadow-gray-700"><span className="mr-2">Sign Up</span> <PersonAddAltIcon /></button>
                                </Link>
                            </div>
                            <div className="m-2">
                                <Link href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL!}>
                                    <button className="flex items-center bg-sky-700 hover:bg-sky-800 font-semibold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-900 rounded-lg border border-slate-700 shadow shadow-gray-700"><span className="mr-2">Sign In</span> <LoginIcon /></button>
                                </Link>
                            </div>
                        </SignedOut>
                        <SignedIn>
                            <div className="m-2">
                                <Link href="/tasks">
                                    <button className="bg-green-700 hover:bg-green-800 font-semibold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-900 rounded-lg border border-slate-700 shadow shadow-gray-700">View My Tasks <ArrowForwardIcon /></button>
                                </Link>
                            </div>
                        </SignedIn>
                    </div>

                    <div className="text-center">
                        <span className="italic font-light text-sm text-gray-300">*Account sign in is powered and secured by <a href="https://clerk.com/" className="underline hover:text-cyan-500">Clerk</a>.</span>
                    </div>

                </div>
            </div>
        </div>
    </>;
}





