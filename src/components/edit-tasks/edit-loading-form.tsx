import Box from "@mui/material/Box";

export default function EditLoadingForm() {

    const style = {
        width: "100%",
        bgcolor: "#475569", //slate-600
        border: "2px solid #111827", //gray-900
        boxShadow: 24,
        borderRadius: 4
    };

    function getLoadingForm() {
        const labelStyle = "mb-1";
        const inputStyle = "w-full rounded border border-slate-800 bg-slate-700 px-3 py-2";

        return <Box sx={style}>

            <div className="flex flex-row items-center px-6 py-6">
                <span className="grow text-xl"><div className="animate-pulse rounded h-5 w-20 bg-slate-500"></div></span>
            </div>

            <div className="w-full space-y-8 p-6 border-y border-slate-700">

                <div className="flex flex-col">
                    <div className={labelStyle}><div className="animate-pulse rounded h-5 w-16 mb-2 bg-slate-500"></div></div>
                    <div className={inputStyle + " bg-slate-500"}><div className="animate-pulse rounded h-5 w-96 my-1 bg-slate-600"></div></div>
                </div>

                <div className="flex flex-col">
                    <div className={labelStyle}><div className="animate-pulse rounded h-5 w-20 mb-1 bg-slate-500"></div></div>
                    <div className={inputStyle}><div className="animate-pulse rounded h-5 w-48 my-1 bg-slate-500"></div></div>
                </div>

                <div className="flex flex-col">
                    <div className={labelStyle}><div className="animate-pulse rounded h-5 w-20 mb-1 bg-slate-500"></div></div>
                    <div className={inputStyle}><div className="animate-pulse rounded h-5 w-56 my-1 bg-slate-500"></div></div>
                </div>

                <div className="flex flex-col w-full">
                    <div className={labelStyle}><div className="animate-pulse rounded h-5 w-24 mb-1 bg-slate-500"></div></div>
                    <div className="flex flex-row items-center w-full">
                        <div className="animate-pulse rounded h-8 w-40 mr-4 bg-slate-500"></div>
                        <div className={inputStyle}><div className="animate-pulse rounded h-5 w-8 my-1 bg-slate-500"></div></div>
                        <div className="animate-pulse rounded h-5 w-14 ml-2 bg-slate-500"></div>
                    </div>
                </div>

                <div className="flex flex-col w-full">
                    <div className={labelStyle}><div className="animate-pulse rounded h-5 w-24 mb-1 bg-slate-500"></div></div>
                    <div className="flex flex-row items-center w-full">
                        <div className="animate-pulse rounded h-8 w-40 mr-4 bg-slate-500"></div>
                        <div className={inputStyle}><div className="animate-pulse rounded h-5 w-8 my-1 bg-slate-500"></div></div>
                        <div className="animate-pulse rounded h-5 w-14 ml-2 bg-slate-500"></div>
                    </div>
                </div>

            </div>

            <div className="flex flex-row items-center px-6 py-5">
                <div className="grow">
                </div>

                <div className="bg-red-500 font-semibold px-4 py-2 mr-2 rounded-lg border border-slate-700 shadow shadow-gray-700">
                    <div className="animate-pulse rounded h-4 w-12 my-1 bg-red-700"></div>
                </div>

                <div className="bg-green-700 font-semibold px-4 py-2 rounded-lg border border-slate-700 shadow shadow-gray-700">
                    <div className="animate-pulse rounded h-4 w-20 my-1 bg-green-800"></div>
                </div>
            </div>
        </Box>;
    }

    return <>
        <div className="flex flex-wrap flex-row justify-center w-full">

            {getLoadingForm()}

        </div>
    </>;
}