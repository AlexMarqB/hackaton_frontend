"use client"
import { MainButton } from "@/Components/Buttons";
import { FormInput } from "@/Components/Forms/FormInput";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import InputMask from 'react-input-mask';

export default function CadastroUser() {

    const [name, setName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [cell, setCell] = useState("")

    const [passPage, setPassPage] = useState(false)

    const [pass, setPass] = useState("")
    const [confPass, setConfPass] = useState("")
    const [passError, setPassError] = useState(false)
    
    useEffect(() => {
        pass === confPass ? setPassError(false) : setPassError(true)
    }, [pass, confPass])

    const handleSubmit = async () => {
        const newUser = {
            nome: name,
            sobrenome: lastname,
            telefone: cell,
            email: email,
            senha: pass
        }

        alert("Criado com sucesso!")

        const router = useRouter()

        router.push('/home/user')
    }

    return (
        <div className="flex w-full px-2">
            {!passPage ? (
                <form className="flex flex-col items-center w-full justify-center text-start gap-6 text-zinc-500">
                    <img src="/Logo-Completa.svg" alt="Logo" className="w-2/4"/>
                <div className="flex flex-col">
                    <label htmlFor="nome">Nome</label>
                    <FormInput type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="sobrenome">Sobrenome</label>
                    <FormInput type="text" placeholder="Sobrenome" value={lastname} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">E-Mail</label>
                    <FormInput type="email" placeholder="exemplo@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="celular">Celular</label>
                    <InputMask
                    mask="(99) 9 9999-9999"
                    className="border-2 border-zinc-500 rounded-sm py-2 px-3"
                    placeholder="(xx) x xxxx-xxxx"
                    value={cell}
                    onChange={(e) => setCell(e.target.value)}
                    />
                </div>
                <div className="flex">
                <MainButton type="button" disabled={!name || !lastname || !email || !cell} onClick={() => setPassPage(true)}>Próximo</MainButton>
                </div>
            </form>
            ) : (
                <div className="flex flex-col self-center w-full px-2">
                <div className="flex justify-end w-full">
					<div className="flex gap-2 underline md:text-lg text-zinc-500">
						<MoveLeft className="" />
						<button onClick={() => setPassPage(false)}>Voltar</button>
					</div>
				</div>
                <form className="flex flex-col items-center w-full justify-center text-start gap-6 text-zinc-500">
                <div className="flex flex-col">
                    <label htmlFor="senha">Senha</label>
                    <FormInput type="password" placeholder="senha" value={pass} onChange={(e) => setPass(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="confpass">Confirmar senha</label>
                    <FormInput type="password" placeholder="confpass" value={confPass} onChange={(e) => setConfPass(e.target.value)}/>
                </div>
                {passError && <span className="text-red-600">Senhas deve ser iguais</span>}
                <div className="flex">
                <MainButton type="button" onClick={() => {() => handleSubmit}}>Confirmar</MainButton>
                </div>
            </form>
            </div>
            )}
        </div>
    );
}
