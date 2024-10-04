import { signedInLinks } from "@/lib/navigation-links";
import { SignedOut, SignInButton, SignedIn, UserButton, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default async function Navigation() {

    return (
        <>
            <header>
                <nav className="flex flex-row items-center w-full mx-auto text-center mt-4 px-2">

                    <div className="cursor-pointer">
                        <Link href="/">
                            <Image src={"/static/logo-wide.svg"} width={418} height={60} alt={"Logo"} className="hover:drop-shadow-[0_0_12px_rgba(148,163,184,0.4)]" />
                        </Link>
                    </div>

                    <div className="grow"></div>


                    <div className="flex flex-row items-center">
                        <SignedIn>
                            {
                                signedInLinks.map((link) => {
                                    return <div className="mx-3 font-semibold hover:text-cyan-500" key={link.link}>
                                        <Link href={link.link}>{link.display}</Link>
                                    </div>;
                                })
                            }
                            <div className="mx-3 p-2">
                                <UserButton
                                    userProfileMode="navigation"
                                    userProfileUrl="/user-profile"
                                />
                            </div>
                            {/* <SignOutButton /> */}
                        </SignedIn>
                    </div>

                    {/* <div className="z-10 absolute right-8">
                    <Link href={"/edit-tasks"}>
                        <button className="flex flex-row items-center w-36 px-4 py-3 bg-green-700 rounded-lg text-nowrap">
                            <div className="mx-auto">
                                <EditIcon /> <span className="ml-1">Edit Tasks</span>
                            </div>
                        </button>
                    </Link>
                </div> */}

                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>

                    </SignedIn>

                </nav>
            </header>
        </>
    );
}