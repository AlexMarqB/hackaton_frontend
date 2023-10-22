"use client";
import React, { useState } from "react";
import { CatalogCards } from "@/Components/CatalogComponents/catalogCards";
import { FormInput } from "@/Components/Forms/FormInput";
import { SearchInput, SearchRoot } from "@/Components/User/SearchInput";
import { motion } from "framer-motion";
import { Filter, Search, UserCircle } from "lucide-react";
import { CancelButton, MainButton } from "@/Components/Buttons";
import { Option, SelectRoot } from "@/Components/Select";
import { EventDataModal } from "@/Components/Company/EventDataModal";
import { Eventos } from "@/@types/entities";

export default function Profile() {
	const tabs = [
		{ id: "profile", label: "Perfil" },
		{ id: "my events", label: "Meus Eventos" },
	];

	const [activeTab, setActiveTab] = useState(tabs[0].id);
	const filters = ["1", "2", "3"];
	const [filterOpen, setFilterOpen] = useState(false);

	const Events: Eventos[] = [
		{
			nome: "Conferência de Inovação em Tecnologia",
			descricao:
				"Um evento inovador sobre as últimas tendências tecnológicas.",
			como_participar:
				"Realize sua inscrição no site do evento para garantir seu lugar.",
			data: new Date("2023-12-10"),
			hora_inicio: "09:00",
			hora_fim: "17:00",
			imagem: "nova_imagem_conferencia.jpg",
			ingresso_social: "R$ 120,00",
			id_instituicao: "007",
		},
		{
			nome: "Noite de Teatro Clássico",
			descricao:
				"Uma apresentação memorável de uma peça teatral clássica em um teatro histórico.",
			como_participar: "Compre ingressos na bilheteria do teatro.",
			data: new Date("2023-11-05"),
			hora_inicio: "19:30",
			hora_fim: "22:00",
			imagem: "nova_imagem_teatro.jpg",
			ingresso_social: "R$ 60,00",
			id_instituicao: "004",
		},
		{
			nome: "Workshop de Fotografia",
			descricao:
				"Um workshop para aprender técnicas avançadas de fotografia.",
			como_participar:
				"Faça sua inscrição online e pague a taxa de participação.",
			data: new Date("nova_data_aqui"),
			hora_inicio: "nova_hora_inicio_aqui",
			hora_fim: "nova_hora_fim_aqui",
			imagem: "nova_imagem_workshop.jpg",
			ingresso_social: "R$ 80,00",
			id_instituicao: "005",
		},
	];

	const [openData, setOpenData] = useState(false);
	const [target, setTarget] = useState<any>({});

	return (
		<>
			<div className="flex text-zinc-500 flex-col px-2">
				<div className="flex space-x-1">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`${
								activeTab === tab.id ? "" : "hover:text-white/60"
							} relative rounded-full px-3 py-1.5 text-sm font-medium text-white opacity-20 bg-zinc-500 outline-sky-400 transition focus-visible:outline-2`}
						>
							{activeTab === tab.id && (
								<motion.span
									layoutId="bubble"
									className="absolute inset-0 z-10 bg-white mix-blend-difference"
									style={{ borderRadius: 9999 }}
									transition={{
										type: "spring",
										bounce: 0.2,
										duration: 0.6,
									}}
								/>
							)}
							{tab.label}
						</button>
					))}
				</div>
				{activeTab === "profile" ? (
					<div className="flex flex-col justify-center items-center">
						<div className="flex w-1/4 h-1/4">
							<UserCircle className="w-full h-full" />
						</div>
						<div className="flex flex-col">
							<label htmlFor="razaoSocial">Razão Social</label>
							<FormInput type="text" id="razaoSocial" value={""} />
						</div>
						<div className="flex flex-col">
							<label htmlFor="sobreNos">Sobre nós</label>
							<textarea
								className="border-2 border-zinc-500"
								id="sobreNos"
								cols={30}
								rows={10}
								value={"about"}
								onChange={(e) => {}}
							></textarea>
						</div>
					</div>
				) : (
					<div className="flex flex-col w-full px-4 py-2">
						<div className="flex w-full">
							<div className="flex flex-col gap-3 text-zinc-500">
								<h1 className="md:text-md lg:text-lg">Eventos</h1>
								<div className="flex w-full gap-6 justify-between">
									<SearchRoot>
										<Search />
										<SearchInput placeholder="Digite aqui..." />
									</SearchRoot>
									<div className="flex bg-zinc-500 p-2 rounded-full text-zinc-800 md:text-sm lg:text-md items-center h-fit">
										<button
											className="outline-none"
											onClick={() => setFilterOpen(true)}
										>
											Filtros
										</button>
										<Filter />
									</div>
								</div>
							</div>
						</div>
						<div className="mt-6 flex flex-col items-center gap-6">
							{Events.map((item, index) => (
								<button
									onClick={() => {
										setTarget(item), setOpenData(true);
									}}
								>
									<CatalogCards
										comments={Math.ceil(Math.random() * 10)}
										img={"/Logo-Icone.svg"}
										rating={Math.ceil(Math.random() * 10)}
										title={item.nome}
										key={index}
									/>
								</button>
							))}
						</div>
						{filterOpen && (
							<>
								<button
									onClick={() => setFilterOpen(false)}
									className="inset-0 w-full h-screen backdrop-blur-sm fixed z-10"
								/>
								<div className="fixed w-3/4 h-1/2 flex-col text-zinc-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center">
									<div className="flex flex-col w-3/4 h-fit gap-8 border-2 p-6 border-zinc-500 bg-zinc-100">
										<h1 className="self-start text-xl">Filtros</h1>
										<div className="flex flex-col w-full">
											<SelectRoot placeholder="Filtro 1">
												{filters.map((item, index) => (
													<Option key={index} value={item}>
														{item}
													</Option>
												))}
											</SelectRoot>
										</div>
										<div className="flex flex-col w-full">
											<SelectRoot>
												{filters.map((item, index) => (
													<Option key={index} value={item}>
														{item}
													</Option>
												))}
											</SelectRoot>
										</div>
										<div className="flex flex-col w-full">
											<SelectRoot>
												{filters.map((item, index) => (
													<Option key={index} value={item}>
														{item}
													</Option>
												))}
											</SelectRoot>
										</div>
										<div className="flex flex-col w-full">
											<SelectRoot>
												{filters.map((item, index) => (
													<Option key={index} value={item}>
														{item}
													</Option>
												))}
											</SelectRoot>
										</div>
										<div className="flex gap-6 self-center">
											<CancelButton
												onClick={() => setFilterOpen(false)}
											>
												Cancelar
											</CancelButton>{" "}
											<MainButton
												onClick={() => {
													setFilterOpen(false);
												}}
											>
												Confirmar
											</MainButton>
										</div>
									</div>
								</div>
							</>
						)}
					</div>
				)}
			</div>
			<EventDataModal
				isOpen={openData}
				onClose={() => setOpenData(false)}
				onConfirm={() => {
					setOpenData(false);
				}}
				target={target}
			/>
		</>
	);
}
