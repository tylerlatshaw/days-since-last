import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import "./../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const copyright = <>
    <div className="w-full pt-6 text-md fade-in text-gray-500">
      <div className="text-center" id="copyright">
        &copy; {new Date().getFullYear()} Tyler J. Latshaw. All rights reserved.
      </div>
    </div>
  </>;

  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-slate-800 text-white p-6">
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>{children}</main>
          <footer>{copyright}</footer>
        </body>
      </html>
    </ClerkProvider>

  );
}
