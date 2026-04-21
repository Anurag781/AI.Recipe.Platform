import React from "react";
import { Cookie, Refrigerator } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeaderActions from "./HeaderActions";
import { checkUser } from "@/lib/checkUser";

export default async function Header() {

  const user = await checkUser();

  return (
    <header className="fixed top-0 w-full z-50 border-b border-stone-200/80 bg-white/80 backdrop-blur-xl supports-backdrop-filter:bg-white/70 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.08)]">
      <nav className="container mx-auto px-4 h-16 md:h-18 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">

          <div className="hidden sm:block">
            <p className="text-xl font-extrabold tracking-[-0.02em] text-stone-900 leading-none">
              NutriChef
            </p>
            <p className="text-[11px] uppercase tracking-[0.34em] text-orange-500 font-bold mt-1 leading-none">
              AI Kitchen
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-3 text-sm font-medium text-stone-600">
          <Link
            href="/recipes"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-transparent hover:border-stone-200 hover:bg-white transition-all duration-300 hover:text-orange-600"
          >
            <Cookie className="w-4 h-4 group-hover:rotate-6 transition-transform duration-300" />
            My Recipes
          </Link>

          <Link
            href="/pantry"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-transparent hover:border-stone-200 hover:bg-white transition-all duration-300 hover:text-orange-600"
          >
            <Refrigerator className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            My Pantry
          </Link>
        </div>

        {/* ✅ CLIENT AUTH HANDLED HERE */}
        <HeaderActions
          subscriptionTier={user?.subscriptionTier || "free"}
        />
      </nav>
    </header>
  );
}