import AddTask from "@/components/add-tasks/add-task";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Add Task",
};

export default function Page() {

    return (
        <>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>

            <SignedIn>
                <AddTask />
            </SignedIn>
        </>
    );
}