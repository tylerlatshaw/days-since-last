"use client";

import { RedirectToSignIn, SignedIn, SignedOut, UserProfile } from "@clerk/nextjs";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

const CustomPage = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-semibold">Feedback</h1>
            <h2 className="text-xl font-semibold">Page Coming Soon</h2>
            <p>Please send all feedback to Tyler Latshaw.</p>
        </div>
    );
};

const UserProfilePage = () => (
    <>
        <SignedOut>
            <RedirectToSignIn />
        </SignedOut>

        <SignedIn>
            <UserProfile path="/user-profile" routing="path">
                <UserProfile.Page label="Feedback" labelIcon={<InsertCommentIcon />} url="custom-page">
                    <CustomPage />
                </UserProfile.Page>
            </UserProfile>
        </SignedIn>
    </>
);

export default UserProfilePage;