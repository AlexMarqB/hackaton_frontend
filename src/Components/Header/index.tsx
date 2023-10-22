"use client"
import Home from "@/app/home/company/page";
import { AlignJustify, User } from "lucide-react";
import { useRouter, usePathname } from "next/navigation"; // Importe 'router' em vez de 'navigation'

export function Header() {
    const router = useRouter();

    const navigate = (link: string) => {
        router.push(link);
    }

    // Verifique se a rota atual é '/'
    const isHome = usePathname() === '/';

    return (
        <div className="w-full hidden sticky z-10 bottom-0 min-h-fit py-6 bg-white text-zinc-500 justify-around">
            <button onClick={() => navigate('/home/user')} className={`max-w-screen w-full h-fit items-center justify-start  bg-zinc-100 ${isHome ? 'hidden' : 'flex'}`}>
            <img src="/Logo-Completa.svg" alt="Logo" className="w-32 md:w-40" />
            </button>
            <div className="flex gap-3 items-center">
            <button type="button">
                <Home />
            </button>
            <button type="button">
            <AlignJustify />
            </button>
            <button type="button">
            <User />
            </button>
            </div>
        </div>
    );
}
