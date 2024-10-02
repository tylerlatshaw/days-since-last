export default function TaskNotFound() {

    return <>
        <div className="flex flex-wrap flex-row justify-center w-full">
            <div className="bg-cyan-400/10 border-2 border-cyan-600 rounded-lg px-12 py-8 text-left">
                <div className="text-3xl font-bold mb-4">Task Not Found</div>
                <div className="">This task does not exist or may have been deleted. Please ensure you are attempting to edit an existing task.</div>
            </div>
        </div>
    </>;
}