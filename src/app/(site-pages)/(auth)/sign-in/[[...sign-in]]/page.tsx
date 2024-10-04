import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign In | Days Since Last",
};

export default function Page() {
    return <SignIn />;
}