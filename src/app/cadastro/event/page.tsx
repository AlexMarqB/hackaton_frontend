"use client";
import { Eventos } from "@/@types/entities";
import { MainButton } from "@/Components/Buttons";
import { Checkbox } from "@/Components/Checkbox";
import { FormInput } from "@/Components/Forms/FormInput";
import { randomUUID } from "crypto";
import { MoveLeft } from "lucide-react";
import { useContext, useState } from "react";
import ReactInputMask from "react-input-mask";

export default function CreateEvent() {
	const [name, setName] = useState("");
	const [comment, setComment] = useState(""); // Declare o estado para o campo de descrição

	const [hasSI, setHasSI] = useState(false);
	const [day, setDay] = useState(""); // Declare o estado para o campo de dia
	const [startTime, setStartTime] = useState(""); // Declare o estado para o campo de horário
	const [endTime, setEndTime] = useState("")
	const [sustainabilityPoints, setSustainabilityPoints] = useState(""); // Declare o estado para o campo de pontos de sustentabilidade
	const [social, setSocial] = useState("")
	const [accessibilityPoints, setAccessibilityPoints] = useState(""); // Declare o estado para o campo de pontos de acessibilidade
	const [howToParticipate, setHowToParticipate] = useState(""); // Declare o estado para o campo de
	const [rules, setRules] = useState(""); // Declare o estado para o campo de regras (caso tenha ingresso social)

	const user = {
		id: randomUUID()
	}

	const handleSubmit = async () => {
		const newEvent: Eventos = {
			nome: name,
    		descricao: comment,
    		como_participar: howToParticipate,
    		data: new Date(day),
    		hora_inicio: startTime,
    		hora_fim: endTime,
    		imagem: '',
    		ingresso_social: social,
    		id_instituicao: user.id, 
		}

		alert("Criado com sucesso!")
	}

	return (
		<div className="flex flex-col px-2 text-zinc-500">
			<img src="/Logo-Completa.svg" alt="Logo" className="w-2/4"/>
			<div className="flex w-full justify-end gap-2 underline md:text-lg">
				<MoveLeft className="" />
				<button>Voltar</button>
			</div>
			<form onSubmit={() => handleSubmit} className="outline-none select-none">
				<div className="flex flex-col">
					<label htmlFor="name">Nome</label>
					<FormInput
						type="string"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="description">Descrição</label>
					<textarea
						className="border-2 border-zinc-500"
						cols={30}
						rows={10}
						value={comment}
						placeholder="Digite aqui..."
						onChange={(e) => setComment(e.target.value)}
					></textarea>
				</div>
				<div className="flex flex-col">
					<label htmlFor="howToParticipate">Como participar</label>
					<FormInput
						type="string"
						onChange={(e) => setHowToParticipate(e.target.value)}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="name">Ingresso Social</label>
					<FormInput
						type="string"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="howToParticipate">Local</label>
					<FormInput
						type="string"
						onChange={(e) => setHowToParticipate(e.target.value)}
					/>
				</div>
				<div className="flex gap-2">
					<div className="flex flex-col">
						<label htmlFor="day">Dia</label>
						<FormInput
							type="Date"
							onChange={(e) => setDay(e.target.value)}
						/>
					</div>
					<div className="flex flex-col w-1/2">
						<label htmlFor="time">Hora inicio</label>
						<ReactInputMask
							mask="99:99h"
							className="border-2 border-zinc-500 rounded-sm py-2 px-3"
							placeholder="xx:xx"
							value={startTime}
							onChange={(e) => setStartTime(e.target.value)}
						/>
					</div>
					<div className="flex flex-col w-1/2">
						<label htmlFor="time">Hora inicio</label>
						<ReactInputMask
							mask="99:99h"
							className="border-2 border-zinc-500 rounded-sm py-2 px-3"
							placeholder="xx:xx"
							value={endTime}
							onChange={(e) => setEndTime(e.target.value)}
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="sustainabilityPoints">
						Pontos de sustentabilidade
					</label>
					<FormInput
						type="string"
						onChange={(e) => setSustainabilityPoints(e.target.value)}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="accessibilityPoints">
						Pontos de acessibilidade
					</label>
					<FormInput
						type="string"
						onChange={(e) => setAccessibilityPoints(e.target.value)}
					/>
				</div>
				<div className="flex gap-3 items-center">
					<Checkbox
						key="ingressoSocial"
						onClick={setHasSI}
						checked={hasSI}
					/>
					Possui ingresso social
				</div>
				{hasSI && (
					<div className="flex flex-col">
						<label htmlFor="rules">Regras</label>
						<textarea
							className="border-2 border-zinc-500"
							cols={30}
							rows={10}
							value={rules}
							placeholder="Digite aqui..."
							onChange={(e) => setRules(e.target.value)}
						></textarea>
					</div>
				)}
			</form>
            <div className="flex w-full mt-6">
                <MainButton type="button" onClick={() => {}}>Salvar</MainButton>
                </div>
		</div>
	);
}
