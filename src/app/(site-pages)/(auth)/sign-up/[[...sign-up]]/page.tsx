import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign Up | Days Since Last",
};

export default function Page() {
  return <SignUp />;
}