"use client";

import { useStoreUser } from "@/hooks/use-store-user";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarLoader } from "react-spinners";
import { Button } from "./ui/button";
import { LayoutDashboardIcon } from "lucide-react";

const Header = () => {
    const { isLoading, isAuthenticated } = useStoreUser();
    const path = usePathname();

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
            <div className='backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 sm:px-6 md:px-8 | py-3 | flex items-center justify-between gap-2'>

                <Link href={isAuthenticated ? "/feed" : "/"} className='flex-shrink-0'>
                    <Image src={"/logo.png"} alt="logo" width={96} height={32} className='h-8 sm:h10 w-auto object-contain' />
                </Link>





                <div className='flex items-center justify-end gap-2'>
                    <Unauthenticated>
                        <SignInButton>
                            <Button variant="glass" className="" size="sm">
                                Sign In
                            </Button>
                        </SignInButton>

                        <SignUpButton>
                            <Button variant="primary" size="sm" className="whitespace-nowrap">
                                Sign Up
                            </Button>
                        </SignUpButton>
                    </Unauthenticated>
                </div>

                <Authenticated>
                    {path == "/" && (
                        <div className='hidden lg:flex items-center justify-center gap-4'>
                            <Link href={"#features"} className='text-white font-medium hover:text-purple-300 cursor-pointer transition-colors duration-300'>
                                Features
                            </Link>
                            <Link href={"#testimonials"} className='text-white font-medium hover:text-purple-300 cursor-pointer transition-colors duration-300'>
                                Testimonials
                            </Link>
                        </div>
                    )}

                    <div className="flex items-center justify-end gap-2">
                        <Link href={"/dashboard"}>
                            <Button variant="outline" size="sm" className="whitespace-nowrap">
                                <LayoutDashboardIcon className="w-4 h-4" />
                                Dashboard
                            </Button>
                        </Link>
                        <UserButton />
                    </div>
                </Authenticated>
            </div>

            {isLoading && (
                <div className='absolute bottom-0 left-0 w-full Z-40 flex justify-center rounded-full px-5'>
                    <BarLoader width={"95%"} color='#D8B4FE' height={2} />
                </div>
            )}
        </header>
    )
}

export default Header
