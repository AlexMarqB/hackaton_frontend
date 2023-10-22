"use client"
import { CatalogCards } from "@/Components/CatalogComponents/catalogCards";

export default function Home() {
	const Events = [
		{
			title: "Evento dahora",
			img: "/Logo-Icone.svg",
			comments: 15,
			rating: 4,
		},
		{
			title: "Evento dahora",
			img: "/Logo-Icone.svg",
			comments: 15,
			rating: 4,
		},
		{
			title: "Evento dahora",
			img: "/Logo-Icone.svg",
			comments: 15,
			rating: 4,
		},
		{
			title: "Evento dahora",
			img: "/Logo-Icone.svg",
			comments: 15,
			rating: 4,
		},
		{
			title: "Evento dahora",
			img: "/Logo-Icone.svg",
			comments: 15,
			rating: 4,
		},
	];

	return (
		<>
			<div className="flex flex-col w-full px-4 py-2 ">
				<div className="flex w-full">
					<div className="flex flex-col gap-3 text-zinc-500">
						<h1 className="md:text-md lg:text-lg">Ultimos eventos</h1>
					</div>
				</div>
				{/* Catalogo */}
				<div className="mt-6 flex flex-col gap-6">
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
		</>
	);
}
