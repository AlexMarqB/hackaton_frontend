"use client";
import { Heart, MessageSquare, Star } from "lucide-react";
import { useState } from "react";
import { CancelButton, MainButton } from "../../Buttons";
import { AvaliationModal } from "./avaliationModal";

interface CardProps {
	title: string;
	img: string;
	comments: number;
	rating: number;
}

export function VisitedCards(data: CardProps) {
	const [avaliation, setAvaliation] = useState(false);
	const [openComment, setOpenComment] = useState(false);

	const [comment, setComment] = useState("");

	return (
		<>
			<div className="flex flex-col">
				<div className="w-fit px-2 self-center bg-white flex items-center justify-evenly">
					<img
						src={data.img || ""}
						alt="logo"
						className="w-1/3 md:w-1/4 lg:w-1/6"
					/>
					<div className="flex flex-col h-full gap-4 items-center">
						<h2 className="text-zinc-500 self md:text-lg lg:text-xl">
							{data.title}
						</h2>
						<button
							className="underline text-zinc-500"
							type="button"
							onClick={() => setAvaliation(true)}
						>
							Avalie!
						</button>
					</div>
					<div className="flex flex-col gap-2">
					<button
						onClick={() => setOpenComment(!openComment)}
						type="button"
						className="flex gap-2 text-zinc-500 outline-none"
					>
						<MessageSquare />
					</button>
					<button
					onClick={() => {}}
						type="button"
						className="flex gap-2 text-zinc-500 outline-none"
					>
						<Heart  />
					</button>
					<button
					onClick={() => {}}
						type="button"
						className="flex gap-2 text-zinc-500 outline-none"
					>
						<Star  />
					</button>
					</div>
				</div>
				{openComment && (
					<div className="flex flex-col border-2 py-2 px-4 w-2/3 self-center bg-white border-zinc-500">
						<form className="flex flex-col gap-4 w-2/3 self-center">
							<h2 className="text-zinc-500">Coméntario</h2>
							<textarea
								className="border-2 border-zinc-300"
								cols={30}
								rows={10}
								value={comment}
								placeholder="Digite aqui..."
								onChange={(e) => setComment(e.target.value)}
							></textarea>
						</form>
						<div className="flex gap-4 py-4 self-center">
							<CancelButton onClick={() => setOpenComment(false)}>
								Cancelar
							</CancelButton>
							<MainButton onClick={() => {}}>Confirmar</MainButton>
						</div>
					</div>
				)}
			</div>
			<AvaliationModal
				isOpen={avaliation}
				onClose={() => setAvaliation(false)}
				onConfirm={() => {
					setAvaliation(false);
				}}
			/>
		</>
	);
}
