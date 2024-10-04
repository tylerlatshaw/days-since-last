import { footerLinks } from "@/lib/navigation-links";
import Link from "next/link";
import SvgIcon from "@mui/icons-material/Home";

export default async function Footer() {

    const copyright = <>
        <div className="w-full mt-6 text-md fade-in text-gray-500">
            <div className="text-center" id="copyright">
                &copy; {new Date().getFullYear()} Tyler J. Latshaw. All rights reserved.
            </div>
        </div>
    </>;

    const links = <>
        {
            footerLinks.map((link) => {
                return <div key={link.link} className="text-gray-400 mx-auto sm:mx-0 px-0 py-1 sm:px-3 sm:py-0">
                    <Link href={link.link} className="group flex items-center">
                        <SvgIcon component={link.icon} className="mr-1 group-hover:text-cyan-500 text-3xl md:text-2xl" />
                        <span className="text-semibold group-hover:text-cyan-500 group-hover:underline">
                            {link.display}
                        </span>
                    </Link>
                </div>;
            })
        }
    </>;

    return (
        <>
            <footer className="mt-6">
                <div className="flex flex-col sm:flex-row justify-center w-full sm:divide-x sm:divide-gray-500 text-center">
                    {links}
                </div>
                {copyright}
            </footer>
        </>
    );
}