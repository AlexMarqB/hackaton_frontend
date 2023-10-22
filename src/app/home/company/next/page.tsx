"use client";
import { Eventos } from "@/@types/entities";
import { CatalogCards } from "@/Components/CatalogComponents/catalogCards";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

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

	const router = useRouter();


	return (
		<>
			<div className="flex flex-col w-full px-4 py-2 ">
				<div className="flex justify-between text-zinc-500 items-center w-full">
					<h1 className="md:text-md lg:text-lg">Próximos eventos</h1>
						<button onClick={() => router.push('/cadastro/event')} className="bg-zinc-800 flex gap-2 rounded-sm text-zinc-100 px-3 py-2">
							Novo Evento 
							<PlusCircle />
						</button>
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
		</>
	);
}
