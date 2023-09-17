"use client ";
import { SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen" >
      {" "}
      <div>
        <Link
          // className={}
          href="/sign-in"
        >
          {" "}
          Sign In
        </Link>
      </div>
    </div>
  );
}
