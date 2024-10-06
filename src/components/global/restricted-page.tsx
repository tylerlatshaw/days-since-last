import { RedirectToSignIn, SignedOut } from "@clerk/nextjs";

export default function RestrictedPage() {

    return (
        <>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
}