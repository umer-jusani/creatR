"use client";
import { FileText, LayoutDashboard, MenuIcon, PenTool, SettingsIcon, Users, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react'
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { UserButton } from '@clerk/nextjs';


const sidebarItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Create Post",
        href: "/dashboard/create",
        icon: PenTool,
    },
    {
        title: "My Posts",
        href: "/dashboard/posts",
        icon: FileText,
    },
    {
        title: "Followers",
        href: "/dashboard/followers",
        icon: Users,
    },
];


const DashboardLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();

    return (
        <div className='min-h-screen text-white'>
            {/* mobile sidebar */}
            <aside className={cn("fixed w-58 h-screen bg-slate-800/50 backdrop-blur-sm border-r border-slate-700 z-50 transition-transform duration-300 lg:translate-x-0",
                isOpen ? "translate-x-0" : "-translate-x-full")}>

                <div className='p-4 border-b border-slate-700 flex items-center justify-between'>
                    <Link href={"/"} className='flex-shrink-0'>
                        <Image src={"/logo.png"} alt="logo" width={96} height={32} className='h-8 sm:h10 w-auto object-contain' />
                    </Link>
                    <Button variant="ghost" size="icon" className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
                        <X className='w-5 h-5 text-white' />
                    </Button>
                </div>

                {/* sidebar items */}
                <div className='p-4 flex flex-col gap-4'>
                    {sidebarItems.map((item, index) => {
                        const isActive = path === item.href || (path.startsWith(item.href) && item.href !== "/dashboard");

                        return (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                            >
                                <div
                                    className={cn(
                                        "flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-200 group",
                                        isActive
                                            ? "bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-white"
                                            : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                                    )}
                                >
                                    <item.icon
                                        className={cn(
                                            "h-5 w-5 transition-colors",
                                            isActive
                                                ? "text-purple-400"
                                                : "text-slate-400 group-hover:text-white"
                                        )}
                                    />
                                    <span className="font-medium text-sm">{item.title}</span>


                                    {item.title === "Create Post" && true && (
                                        <Badge variant="secondary" className="ml-auto text-xs bg-orange-500/20 text-orange-300 border-orange-500/30">
                                            Draft
                                        </Badge>
                                    )}
                                </div>
                            </Link>
                        )
                    })}
                </div>



                {/* content */}
                <div className='absolute bottom-4 left-4 right-4'>
                    <Link href={"dashboard/settings"}>
                        <Button variant={"outline"} size={"sm"} className='w-full justify-start'>
                            <SettingsIcon className='w-5 h-5 mr-2' />
                            Settings
                        </Button>
                    </Link>
                </div>
            </aside>


            <div className='lg:ml-58'>
                <header className='fixed w-full top-0 lg:left-58 right-0 bg-slate-800/80 d-block backdrop-blur-md border-b border-slate-700 over'>
                    <div className='flex items-center justify-between px-4 lg:px-8 py-4'>
                        <div>
                            <Button variant={"ghost"} size={"icon"} className='lg:hidden' onClick={() => setIsOpen(!isOpen)}><MenuIcon className='w-5 h-5 text-white' /></Button>
                        </div>
                            <UserButton />
                    </div>
                </header>

                <main className='pt-20'>
                    {children}
                </main>
            </div>

        </div >
    )
}

export default DashboardLayout
