import { signedInLinks, signedOutLinks } from "@/lib/navigation-links";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
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


                    <SignedIn>
                        <div className="flex flex-row items-center">
                            {
                                signedInLinks.map((link) => {
                                    return <Link className="mx-3 font-semibold px-2 py-1 hover:text-cyan-500 hover:border-b-2 hover:border-cyan-500 hover:drop-shadow-[0_0_12px_rgba(148,163,184,0.4)]" href={link.link} key={link.link}>
                                        <span>{link.display}</span>
                                    </Link>;
                                })
                            }
                            <div className="mx-3 p-2">
                                <UserButton
                                    userProfileMode="navigation"
                                    userProfileUrl="/user-profile"
                                />
                            </div>
                        </div>
                    </SignedIn>

                    <SignedOut>
                        <div className="flex flex-row items-center">
                            {
                                signedOutLinks.map((link) => {
                                    return <Link className="mx-3 font-semibold px-2 py-1 hover:text-cyan-500 hover:border-b-2 hover:border-cyan-500 hover:drop-shadow-[0_0_12px_rgba(148,163,184,0.4)]" href={link.link} key={link.link}>
                                        <span>{link.display}</span>
                                    </Link>;
                                })
                            }
                        </div>
                    </SignedOut>

                </nav>
            </header>
        </>
    );
}