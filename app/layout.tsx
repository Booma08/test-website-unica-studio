"use client";
import "./globals.css";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const [isOpen, setIsOpen] = useState(false); // ✅ Déclaration de l'état

    return (
        <html lang="en">
        <body className="font-satoshi antialiased">
        {/* Navigation principale sticky avec burger mobile */}
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/40 backdrop-blur-md shadow-md rounded-3xl px-6 py-3 w-fit flex items-center gap-6 text-sm border border-white/30">

            {/* Menu Desktop */}
            <div className="hidden sm:flex gap-14">
                <Link href="/" className="transition duration-50 hover:opacity-80 text-gray-800 m-2 font-black text-xl">Accueil</Link>
                <Link href="#services" className="transition duration-50 hover:opacity-80 text-gray-800 m-2 font-black text-xl">Services</Link>
                <Link href="/portfolio" className="transition duration-50 hover:opacity-80 text-gray-800 m-2 font-black text-xl">Portfolio</Link>
                <Link href="/contact" className="transition duration-50 hover:opacity-80 text-gray-800 m-2 font-black text-xl">Contact</Link>
            </div>

            {/* Menu Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden text-black">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>

        {/* Menu mobile déroulant */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="sm:hidden fixed top-0 left-0 w-full h-screen z-40 flex flex-col items-center justify-center gap-6 bg-white/90 backdrop-blur-md px-8"
                >
                    <Link href="#" onClick={() => setIsOpen(false)} className="text-black text-sm">Accueil</Link>
                    <Link href="#services" onClick={() => setIsOpen(false)} className="text-black text-sm">Services</Link>
                    <Link href="#portfolio" onClick={() => setIsOpen(false)} className="text-black text-sm">Portfolio</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="text-black text-sm">Contact</Link>
                </motion.div>
            )}
        </AnimatePresence>

        {children}
        </body>
        </html>
    );
}
