export default async function Footer() {

    const copyright = <>
        <div className="w-full pt-6 text-md fade-in text-gray-500">
            <div className="text-center" id="copyright">
                &copy; {new Date().getFullYear()} Tyler J. Latshaw. All rights reserved.
            </div>
        </div>
    </>;

    return (
        <>
            <footer>
                {copyright}
            </footer>
        </>
    );
}