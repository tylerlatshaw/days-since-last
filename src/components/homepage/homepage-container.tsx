"use client";

import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HomepageContainer() {

    return <>
        <div className="flex flex-col w-full">
            <div className="flex justify-center w-full">
                <h1 className="text-4xl font-bold">
                    Welcome to Days Since Last!
                </h1>
            </div>
            <div className="flex justify-center w-full">
                <SignedOut>
                    <div className="m-2">
                        <Link href={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL!}>
                            <button className="bg-green-700 hover:bg-green-800 font-semibold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-900 rounded-lg border border-slate-700 shadow shadow-gray-700">Sign Up</button>
                        </Link>
                    </div>
                    <div className="m-2">
                        <Link href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL!}>
                            <button className="bg-sky-700 hover:bg-sky-800 font-semibold px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-900 rounded-lg border border-slate-700 shadow shadow-gray-700">Sign In</button>
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
        </div>
    </>;
}





