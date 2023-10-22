"use client";
import { CancelButton, MainButton } from "@/Components/Buttons";
import { CatalogCards } from "@/Components/CatalogComponents/catalogCards";
import { SearchInput, SearchRoot } from "@/Components/User/SearchInput";
import { Option, SelectRoot } from "@/Components/Select";
import { Filter, Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
	const Events = [
		{
			title: "Show Beneficente",
			desc: "Show sem intenções lucrativas com intenção de doar alimentos",
			img: "/Logo-Icone.svg",
			comments: 8,
			rating: 2,
		},
		{
			title: "Palestra sobre ONGS",
			desc: "Palestra buscando icentivar pessoas a participarem de ONGS",
			img: "/Logo-Icone.svg",
			comments: 15,
			rating: 4,
		},
		{
			title: "Passeata em pro da defesa do meio ambiente",
			desc: "Caminhada educativa pela trilha das cachoeiras",
			img: "/Logo-Icone.svg",
			comments: 30,
			rating: 6,
		},
	];

	const filters = [
		{
			title: "Tipo de ingresso",
			tipos: ["Doação de alimento", "Digital", "Biodegradavel", "Aberto"],
		},
		{
			title: "Cuidado com meio ambiente",
			tipos: ["Total", "Parcial", "Minima"],
		},
		{
			title: "Certificado",
			tipos: ["100% EcoFriendly", "Amigo do ambiente", "Preservador "],
		},
	];

	const [filterOpen, setFilterOpen] = useState(false);

	return (
		<>
			<div className="flex flex-col w-full px-4 py-2 ">
				<div className="flex w-full">
					<div className="flex flex-col gap-3 text-zinc-500">
						<h1 className="md:text-md lg:text-lg">Eventos Próximos</h1>
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
				{/* Catalogo */}
				<div className="mt-6 flex flex-col max-w-2/3 gap-6">
					{Events.map((item, index) => (
						<CatalogCards
							comments={item.comments}
							img={item.img}
							rating={item.rating}
							title={item.title}
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
					<div className="fixed w-full h-1/2 flex-col  text-zinc-500  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-30 flex items-center justify-center">
						<div className="flex flex-col w-3/4 h-fit gap-8 border-2 p-6 border-zinc-500 bg-zinc-100">
							<h1 className="self-start text-xl">Filtros</h1>
							<div className="flex flex-col gap-5 w-full">
								{filters.map((item, index) => (
									<SelectRoot key={index} placeholder={item.title}>
										{item.tipos.map((item, index) => (
											<Option key={index}>{item}</Option>
										))}
									</SelectRoot>
								))}
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
