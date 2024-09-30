import LoadingContainer from "@/components/loading-container";
import TaskContainer from "@/components/task-container";
import { Suspense } from "react";

export default function Home() {

  return (
    <>
      <nav className="flex flex-row w-full mx-auto text-center mt-8">
        <h1 className="w-full text-6xl">Days Since Last</h1>
      </nav>
      <main className="flex flex-row mt-8">

        <Suspense fallback={<LoadingContainer />}>
          <TaskContainer />
        </Suspense>

      </main>
    </>
  );
}
