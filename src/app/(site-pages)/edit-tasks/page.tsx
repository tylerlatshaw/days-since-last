import EditTable from "@/components/edit-tasks/edit-table";
import { SignedOut, RedirectToSignIn, SignedIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Edit Task",
};

export default function Page() {

    return (
        <>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>

            <SignedIn>
                <EditTable />
            </SignedIn>
        </>
    );
}