"use client"

import { MainButton } from "@/Components/Buttons"
import { FormInput } from "@/Components/Forms/FormInput"
import { useRouter } from "next/navigation"

export default function Login() {

    const router = useRouter()

    return (
        <div className="flex flex-col gap-4 text-zinc-500 items-center justify-center bg-zinc-100">
            <img src="/Logo-Completa.svg" alt="Logo" className="w-1/4"/>
            <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <FormInput type="email" placeholder="email@example.com"/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="password">Senha</label>
                <FormInput type="password" placeholder="Senha"/>
            </div>
            <div className="flex flex-col gap-3">
                <MainButton onClick={() => {
                    alert("Criado com sucesso!")
                    setTimeout(() => {
                        router.push("/home/user")
                    }, 2000);
                }}>Entrar</MainButton>
                <button className="text-zinc-800 underline" onClick={() => router.push('/cadastro/company')}>Cadastrar-me - Instituição</button>
                <button className="text-zinc-800 underline" onClick={() => router.push('/cadastro/user')}>Cadastrar-me - Usuario</button>
            </div>
        </div>
    )
}