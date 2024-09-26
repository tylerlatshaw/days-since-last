import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { Button } from "@mui/material";

export async function BlankCard() {

    return <div className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-2 text-center">
        <div className={"m-2 p-3 rounded-lg border-dashed border-4 border-gray-600 bg-gray-400 "}>
            <span className="flex w-full font-bold text-2xl sm:text-xl lg:text-2xl text-center justify-center mx-auto items-center h-16 line-clamp-2 text-ellipsis"></span>

            <div className="m-6">
                <Button className="flex flex-col w-full bg-gray-500/40 aspect-square rounded-lg border border-black text-black group hover:bg-black/30 cursor-pointer">
                    <span className="text-5xl sm:text-3xl lg:text-5xl mb-2 text-gray-600 group-hover:text-gray-800"><AddCircleOutlineIcon fontSize="large" /></span>
                    <span className="text-2xl"></span>
                </Button>
            </div>

            <span className="font-extralight italic text-base">&nbsp;</span>
        </div>
    </div >;
}