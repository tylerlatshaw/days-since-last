import EditTable from "@/components/edit-tasks/edit-table";
import RestrictedPage from "@/components/global/restricted-page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Edit Task",
};

export default function Page() {

    return (
        <>
            <RestrictedPage />

            <EditTable />
        </>
    );
}