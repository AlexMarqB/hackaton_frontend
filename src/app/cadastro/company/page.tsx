"use client"
import { Instituicoes, PerfilEmpresarial } from "@/@types/entities";
import { MainButton } from "@/Components/Buttons";
import { FormInput } from "@/Components/Forms/FormInput";
import { Option, SelectRoot } from "@/Components/Select";
import { MoveLeft } from "lucide-react";
import { useEffect, useState } from "react";
import InputMask from 'react-input-mask';

export default function CadastroUser() {

    const [reason, setReason] = useState("")
    const [email, setEmail] = useState("")
    const [about, setAbout] = useState("")
    const [profile, setProfile] = useState<PerfilEmpresarial>()

    const [passPage, setPassPage] = useState(false)

    const [pass, setPass] = useState("")
    const [confPass, setConfPass] = useState("")
    const [passError, setPassError] = useState(false)
    
    useEffect(() => {
        pass === confPass ? setPassError(false) : setPassError(true)
    }, [pass, confPass])

    const handleSubmit = async () => {
        const newCompany: Instituicoes = {
            razao_social: reason,
            perfil_empresarial: profile!,
            descricao: about,
            email: email,
            senha: pass,
        }

        alert("Criado com sucesso!")
    }

    return (
        <div className="flex w-full px-2">
            {!passPage ? (
                <form className="flex flex-col items-center w-full justify-center text-start gap-6 text-zinc-500">
                    <img src="/Logo-Completa.svg" alt="Logo" className="w-2/4"/>
                <div className="flex flex-col">
                    <label htmlFor="nome">Razão Social</label>
                    <FormInput type="text" placeholder="Nome" value={reason} onChange={(e) => setReason(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">E-Mail</label>
                    <FormInput type="email" placeholder="exemplo@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="email">Perfil Empresarial</label>
                <SelectRoot>
                    <Option value={"instituicao_publica"}>InstituicaoPublica</Option>
                    <Option value={"eco_friendly"}>EcoFriendly</Option>
                    <Option value={"inclusao_social"}>InclusaoSocial</Option>
                    <Option value={"restauracao_ambiental"}>RestauracaoAmbiental</Option>
                </SelectRoot>
                </div>
                <div className="flex flex-col">
						<label htmlFor="rules">Sobre nós</label>
						<textarea
							className="border-2 border-zinc-500"
							cols={30}
							rows={10}
							value={about}
							placeholder="Digite aqui..."
							onChange={(e) => setAbout(e.target.value)}
						></textarea>
					</div>
                <div className="flex">
                <MainButton type="button" disabled={!reason || !email || !about} onClick={() => setPassPage(true)}>Próximo</MainButton>
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
                <form onSubmit={() => handleSubmit} className="flex flex-col items-center w-full justify-center text-start gap-6 text-zinc-500">
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
                <MainButton type="submit" onClick={() => {}}>Confirmar</MainButton>
                </div>
            </form>
            </div>
            )}
        </div>
    );
}
