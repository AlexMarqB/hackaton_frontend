"use client";
import { CancelButton, MainButton } from "@/Components/Buttons";
import { CatalogCards } from "@/Components/CatalogComponents/catalogCards";
import { SearchInput, SearchRoot } from "@/Components/User/SearchInput";
import { Option, SelectRoot } from "@/Components/Select";
import { Filter, Search } from "lucide-react";
import { useState } from "react";
import { Eventos } from "@/@types/entities";

// const Events: Eventos[] = await axiosClient('/eventos/get-all') || []

export default function Home() {
	const Events: Eventos[] = [
		{
			nome: "Conferência de Tecnologia",
			descricao:
				"Uma conferência sobre as últimas tendências em tecnologia e inovação.",
			como_participar: "Faça sua inscrição online no site do evento.",
			data: new Date("2023-12-10"),
			hora_inicio: "09:00",
			hora_fim: "17:00",
			imagem: "conferencia.jpg",
			ingresso_social: "R$ 100,00",
			id_instituicao: "003",
		},
		{
			nome: "Peça de Teatro Clássica",
			descricao:
				"Uma apresentação de uma peça teatral clássica em um teatro histórico.",
			como_participar: "Compre ingressos na bilheteria do teatro.",
			data: new Date("2023-11-05"),
			hora_inicio: "19:30",
			hora_fim: "22:00",
			imagem: "teatro.jpg",
			ingresso_social: "R$ 60,00",
			id_instituicao: "004",
		},
		{
			nome: "Workshop de Fotografia",
			descricao:
				"Um workshop para aprender técnicas avançadas de fotografia.",
			como_participar:
				"Faça sua inscrição online e pague a taxa de participação.",
			data: new Date("2023-10-30"),
			hora_inicio: "14:00",
			hora_fim: "18:00",
			imagem: "workshop.jpg",
			ingresso_social: "R$ 80,00",
			id_instituicao: "005",
		},
	];

	const [filterOpen, setFilterOpen] = useState(false);

	return (
		<>
			<div className="flex flex-col w-full px-4 py-2 ">
				<div className="flex w-full">
					<div className="flex flex-col gap-3 text-zinc-500">
						<h1 className="md:text-md lg:text-lg">Eventos</h1>
						<div className="flex w-full gap-6 items-center justify-between">
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
				{/* Catalogo */}
				<div className="mt-6 flex flex-col gap-6">
					{Events.map((item, index) => (
						<CatalogCards
							comments={Math.ceil(Math.random() * 10)}
							img={'/Logo-Icone.svg'}
							rating={Math.ceil(Math.random() * 10)}
							title={item.nome}
							key={index}
						/>
					))}
				</div>
			</div>
			{filterOpen && (
				<>
					<button
						onClick={() => setFilterOpen(false)}
						className="inset-0 w-full h-screen backdrop-blur-sm fixed z-10"
					/>
					<div className="fixed w-3/4 h-1/2 flex-col  text-zinc-500  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-30 flex items-center justify-center">
						<div className="flex flex-col w-3/4 h-fit gap-8 border-2 p-6 border-zinc-500 bg-zinc-100">
							<h1 className="self-start text-xl">Filtros</h1>
							<div className="flex flex-col w-full">
								<SelectRoot placeholder="Filtro 1">
									<Option></Option>
								</SelectRoot>
							</div>
							<div className="flex flex-col w-full">
								<SelectRoot>
									<Option></Option>
								</SelectRoot>
							</div>
							<div className="flex flex-col w-full">
								<SelectRoot>
									<Option></Option>
								</SelectRoot>
							</div>
							<div className="flex flex-col w-full">
								<SelectRoot>
									<Option></Option>
								</SelectRoot>
							</div>
							<div className="flex gap-6 self-center">
								<CancelButton onClick={() => setFilterOpen(false)}>
									Cancelar
								</CancelButton>{" "}
								<MainButton
									onClick={() => {
										setFilterOpen(false);
									}}
								>
									Confimar
								</MainButton>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}
