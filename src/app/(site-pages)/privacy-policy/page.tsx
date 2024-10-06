import { Metadata } from "next";
import { Suspense } from "react";
import PrivacyPolicy from "../../../components/privacy-policy/privacy-policy";
import PrivacyPolicyLoading from "../../../components/privacy-policy/privacy-policy-loading";

export const metadata: Metadata = {
    title: "Privacy Policy",
};

export default function Page() {
    return <>
        <div className="text-center text-4xl font-bold mb-8">
            <h1>Privacy Policy</h1>
        </div>

        <Suspense fallback={<PrivacyPolicyLoading />}>
            <PrivacyPolicy />
        </Suspense>
    </>;
}