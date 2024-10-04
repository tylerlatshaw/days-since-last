import AddTask from "@/components/add-tasks/add-task";
import RestrictedPage from "@/components/global/restricted-page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Add Task",
};

export default function Page() {

    return (
        <>
            <RestrictedPage />
            
            <AddTask />
        </>
    );
}