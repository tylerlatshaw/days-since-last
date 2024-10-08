import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";
import Navigation from "@/components/global/navigation";
import Footer from "@/components/global/footer";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

const description = "Days Since Last is an easy-to-use task tracking system geared towards ensuring that you complete your recurring tasks on time.";

export const metadata: Metadata = {
  title: {
    template: "%s | Days Since Last",
    default: "Days Since Last | Task Tracking System",
  },
  metadataBase: new URL("https://days-since-last.tylerlatshaw.com/"),
  description: description,
  generator: "Next.js",
  applicationName: "Days Since Last",
  keywords: ["Days Since Last", "Task Management"],
  authors: [{ name: "Tyler Latshaw", url: "https://days-since-last.tylerlatshaw.com/" }],
  creator: "Tyler J. Latshaw",
  publisher: "Tyler J. Latshaw",
  openGraph: {
    title: "Days Since Last | Task Tracking System",
    description: description,
    url: "https://days-since-last.tylerlatshaw.com/",
    siteName: "Tyler Latshaw",
    images: [{
      url: "https://days-since-last.tylerlatshaw.com/static/days-since-last-meta-cover.png"
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Days Since Last | Task Tracking System",
    description: description,
    creator: "@tylerlatshaw",
    images: ["https://days-since-last.tylerlatshaw.com/static/days-since-last-meta-cover.png"]
  }
};

const GA4Tracking = () => {
  if (process.env.NODE_ENV === "production")
    return <><GoogleAnalytics gaId={process.env.GA4_CODE!} /></>;
  else
    return null;
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
          {GA4Tracking()}
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
