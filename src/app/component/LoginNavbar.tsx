'use client';
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch, CiHeart } from "react-icons/ci";
import {  IoCartOutline } from "react-icons/io5";


export default function HomeNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div>
            <nav className="max-w-[1437px] mx-auto px-4 flex justify-between items-center h-[58px] text-[#252B42] relative">
                {/* Logo Section */}
                <div className="text-2xl font-bold">Bandage</div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 text-sm font-bold">
                    <li><Link href="/">Home</Link></li>
                    <li className="flex items-center">
                        <Link href="../product">Shop</Link>
                        <div className="text-lg">
                            <RiArrowDropDownLine />
                        </div>

                    </li>
                    <li><Link href="../AboutUS">About</Link></li>
                    <li><Link href="../Team">Team</Link></li>
                    <li><Link href="../Contact">Contact</Link></li>
                    <li><Link href="">Pages</Link></li>
                </ul>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    ☰
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <ul className="absolute top-[58px] left-0 w-full bg-white flex flex-col items-center space-y-4 p-4 shadow-lg z-10">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="../product">Shop</Link></li>
                        <li><Link href="../AboutUS">About</Link></li>
                        <li><Link href="../Team">Team</Link></li>
                        <li><Link href="../Contact">Contact</Link></li>
                        <li><Link href="">Pages</Link></li>
                    </ul>
                )}

                {/* Account, Search, Cart, and Wishlist */}
                <div className="flex space-x-4 items-center text-[#23A6F0]">
                    {/* Login */}
                    <button className="flex items-center gap-1">
                        <MdOutlineAccountCircle />
                        <span className="hidden md:inline text-sm">Login / Register</span>
                    </button>
                    {/* Search */}
                    <button className="text-lg">
                        <CiSearch />
                    </button>
                    {/* Cart */}
                    <button className="text-lg relative">
                        <a href="../cart"><IoCartOutline /></a>
                        
                        <span className="absolute top-0 right-0 text-xs rounded-full px-1">1</span>
                    </button>
                    {/* Wishlist */}
                    <button className="text-lg relative">
                        <CiHeart />
                        <span className="absolute top-0 right-0 text-xs rounded-full px-1">1</span>
                    </button>
                </div>
            </nav>


        </div>

    );
}

