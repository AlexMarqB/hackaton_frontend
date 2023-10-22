import { VisitedCards } from "@/Components/User/VisitedComponents/visitedCards";
import { SearchInput, SearchRoot } from "@/Components/User/SearchInput";
import { Search } from "lucide-react";

export default function VisitedEvents() {
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
	];

	return (
		<div className="flex flex-col w-full px-4 py-2 ">
			<div className="flex w-full">
				<div className="flex flex-col gap-3 text-zinc-500">
					<h1 className="md:text-md lg:text-lg">Eventos Visitados</h1>
					<div className="flex w-full gap-6 justify-between">
						<SearchRoot>
							<Search />
							<SearchInput placeholder="Digite aqui..." />
						</SearchRoot>
					</div>
				</div>
			</div>
            <div className="mt-6 flex flex-col gap-6">
					{Events.map((item, index) => (
						<VisitedCards
							comments={item.comments}
							img={item.img}
							rating={item.rating}
							title={item.title}
							key={index}
						/>
					))}
				</div>
		</div>
	);
}
