export default function LoadingContainer() {

    function generateCards() {

        return <>
            <div className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-2 text-center">
                <div className="m-2 p-3 rounded-lg border border-gray-800 shadow-xl shadow-gray-700 bg-gray-400">
                    <div className="animate-pulse bg-gray-500 w-[75%] mx-auto h-5 rounded mt-4">&nbsp;</div>
                    <div className="animate-pulse bg-gray-500 w-[40%] mx-auto h-5 rounded mt-2">&nbsp;</div>

                    <div className="m-6">
                        <div className="animate-pulse grid place-items-center content-center w-full bg-gray-500/40 aspect-square rounded-lg border border-black text-black">
                            <div className="animate-pulse bg-gray-500 w-1/4 mx-auto h-12 rounded mt-2">&nbsp;</div>
                            <div className="animate-pulse bg-gray-500 w-1/2 mx-auto h-8 rounded mt-3">&nbsp;</div>
                        </div>
                    </div>

                    <div className="animate-pulse bg-gray-500 w-[80%] mx-auto h-3 rounded mb-3">&nbsp;</div>
                </div>
            </div>
        </>;
    }

    function blankCard() {
        return <>
            <div className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5 p-2 text-center">
                <div className={"m-2 p-3 rounded-lg border-dashed border-4 border-gray-600 bg-gray-400 "}>
                    <span className="flex w-full font-bold text-2xl sm:text-xl lg:text-2xl text-center justify-center mx-auto items-center h-16 line-clamp-2 text-ellipsis"></span>

                    <div className="m-6">
                        <div className="animate-pulse grid place-items-center content-center w-full bg-gray-500/40 aspect-square rounded-lg border border-black text-black">
                            <div className="animate-pulse bg-gray-500 w-1/4 mx-auto h-12 rounded mt-2">&nbsp;</div>
                        </div>
                    </div>

                    <span className="font-extralight italic text-base">&nbsp;</span>
                </div>
            </div>
        </>;
    }

    return <>
        <div className="flex flex-wrap flex-row justify-center bg-slate-600 w-full p-8 rounded-lg border-2 border-gray-900 shadow-lg">

            {generateCards()}
            {generateCards()}
            {generateCards()}
            {generateCards()}

            {blankCard()}

        </div>
    </>;
}