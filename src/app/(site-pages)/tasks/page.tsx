import TaskContainer from "@/components/tasks/task-container";
import { SignedOut, RedirectToSignIn, SignedIn } from "@clerk/nextjs";

export default async function Home() {

  return (<>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
    
    <SignedIn>
      <TaskContainer />
    </SignedIn>
  </>
  );
}