export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <>
            <nav className="flex flex-row items-center w-full mx-auto text-center mt-8">

                <h1 className="mx-auto text-6xl font-semibold">Days Since Last</h1>

            </nav>

            <main className="flex flex-row mt-8">
                <div className="flex flex-wrap flex-row justify-center bg-slate-600 w-full p-8 rounded-lg border-2 border-gray-900 shadow-lg">
                    {children}
                </div>
            </main>
        </>
    );
}
