import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./../globals.css";
import Navigation from "@/components/global/navigation";
import Footer from "@/components/global/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Days Since Last",
    default: "Days Since Last",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {
          logoImageUrl: "/static/logo-wide.svg",
          privacyPageUrl: "/privacy-policy",
          socialButtonsVariant: "blockButton"
        },
        variables: {
          colorBackground: "#083344", // cyan-950
          spacingUnit: "1.5rem",
          fontSize: "1rem"
        }
      }}
    >
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        </head>
        <body className="bg-slate-800 text-white p-6">

          <Navigation />

          <main>
            <div className="flex flex-row mt-8">
              <div className="flex flex-wrap flex-row justify-center bg-slate-600 w-full p-8 rounded-lg border-2 border-gray-900 shadow-lg">
                {children}
              </div>
            </div>
          </main>

          <Footer />

        </body>
      </html>
    </ClerkProvider>
  );
}
