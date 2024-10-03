// import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default async function Navigation() {

    return (
        <>
            <header>
                <nav className="flex flex-row items-center w-full mx-auto text-center mt-8">

                    <Link href="/">
                        <Image src={"/static/logo-wide.svg"} width={418} height={60} alt={"Logo"} />
                    </Link>

                    {/* <div className="z-10 absolute right-8">
                    <Link href={"/edit-tasks"}>
                        <button className="flex flex-row items-center w-36 px-4 py-3 bg-green-700 rounded-lg text-nowrap">
                            <div className="mx-auto">
                                <EditIcon /> <span className="ml-1">Edit Tasks</span>
                            </div>
                        </button>
                    </Link>
                </div> */}

            {/* <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}

                </nav>
            </header>
        </>
    );
}