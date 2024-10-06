import RestrictedPage from "@/components/global/restricted-page";
import TaskContainer from "@/components/homepage/task-container";

export default async function Home() {

  // await fetch("http://localhost:3000/api/get-aws");

  return (<>
    <RestrictedPage />

    {/* {await fetch("http://localhost:3000/api/get-aws")} */}

    <TaskContainer />
  </>
  );
}