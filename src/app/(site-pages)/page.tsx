import TaskContainer from "@/components/homepage/task-container";
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