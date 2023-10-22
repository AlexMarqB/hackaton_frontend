"use client";

import { Eye, Pencil, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

interface CardProps {
	title: string;
	img: string;
	comments: number;
	rating: number;
}

export function EventDataCard(data: any) {

	return (
		<>
			<div className="flex flex-col">
				<div className="w-fit px-2 self-center bg-white flex items-center justify-evenly">
					<img
						src={"/Logo-Icone.svg"}
						alt="logo"
						className="w-1/3 md:w-1/4 lg:w-1/6"
					/>
					<div className="flex flex-col h-full gap-4 items-center">
						<h2 className="text-zinc-500 self md:text-lg lg:text-xl">
							{data.nome}
						</h2>
					</div>
					<div className="flex flex-col gap-2">
						<button
							onClick={() => {}}
							type="button"
							className="flex gap-2 text-zinc-500 outline-none"
						>
							<Eye />
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
