import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, currentUser, SignIn } from "@clerk/nextjs";
import TopNav from "@/components/custom-ui/common/TopNav";
import LeftSidebar from "@/components/custom-ui/common/LSideBar";
import RightSidebar from "@/components/custom-ui/common/RSidebar";
import BottomNav from "@/components/custom-ui/common/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "unknown",
  description: "social media",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark`}>
          {/* top NavBar */}
           <TopNav/>
          <main className="flex h-full">
            {/* left sidebar */}
            <LeftSidebar/>
            <section className='main-container'>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>
            {/* right sidebar */}
            {/* @ts-ignore */}
            <RightSidebar/>
          </main>
          {/* bottom bar */}
          <BottomNav/>
        </body>
      </html>
    </ClerkProvider>
  );
}
