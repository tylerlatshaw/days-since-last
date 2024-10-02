import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditTable from "@/components/edit-tasks/edit-table";

export default async function Page() {

    return (
        <>
            <nav className="flex flex-row items-center w-full mx-auto text-center mt-8">

                <h1 className="mx-auto text-6xl font-semibold">Days Since Last</h1>

                <div className="z-10 absolute right-8">
                    <Link href={"/"}>
                        <button className="flex flex-row items-center w-36 px-4 py-3 bg-green-700 rounded-lg text-nowrap">
                            <div className="mx-auto">
                                <ArrowBackIcon /> <span className="ml-1">Go Back</span>
                            </div>
                        </button>
                    </Link>
                </div>

            </nav>

            <main className="flex flex-row mt-8">
                <div className="flex flex-wrap flex-row justify-center bg-slate-600 w-full p-8 rounded-lg border-2 border-gray-900 shadow-lg">
                    <EditTable />
                </div>
            </main>
        </>
    );
}