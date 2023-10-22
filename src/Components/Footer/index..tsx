"use client"
import { AlignJustify, Home, User } from "lucide-react";
import { useRouter } from "next/navigation";


export function Footer() {
    const router = useRouter()

    return (
        <div className="w-full md:hidden sticky z-10 bottom-0 min-h-fit py-6 bg-white text-zinc-500 flex justify-around">
            <button type="button" onClick={() => router.push('/home/user')}>
                <Home />
            </button>
            <button type="button">
            <AlignJustify />
            </button>
            <button type="button" onClick={() => router.push('/')}>
            <User />
            </button>
        </div>
    )
}