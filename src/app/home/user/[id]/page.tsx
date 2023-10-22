"use client";
import { MainButton } from "@/Components/Buttons";
import { ConfirmModal } from "@/Components/User/ConfirmModal";
import { MoveLeft } from "lucide-react";
import { useState } from "react";

export default function EventPage() {
	const Event: any = {};

	const data = new Date().toLocaleString();

	const tags: any[] = ["teste 1", "teste 2", "teste 3"];

	const [openConfirm, setOpenConfirm] = useState(false);

	return (
		<>
			<div className="flex flex-col px-2 gap-8 h-screen text-zinc-500">
				<h1 className="text-2xl md:text-3xl font-bold">Show beneficente a ONGS</h1>
				<div className="flex justify-between">
					<h2 className="md:text-lg">Show sem intenções lucrativas</h2>
					<div className="flex gap-2 underline md:text-lg">
						<MoveLeft className="" />
						<button>Voltar</button>
					</div>
				</div>
				<span className="w-full text-right">{data}</span>
				<div className="flex flex-col gap-4 text-justify">
					<div>
						<h1 className="md:text-lg">Sobre este evento</h1>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Delectus mollitia repellendus amet? Incidunt fugit nesciunt
							deserunt corrupti architecto, magni veritatis ab quasi
							voluptate eum? Quae sapiente nam sequi alias iure. Dolore
							commodi illum autem libero quisquam sed doloremque dicta
							consequuntur ipsum, cumque aut veniam sit officiis itaque
							totam et nesciunt illo impedit porro voluptates accusamus
							praesentium tenetur nisi! Unde, suscipit! Architecto natus
							magni, pariatur aperiam quidem ut optio amet ipsam, soluta
							laborum dolores commodi corrupti suscipit aliquid unde
							molestiae! Cum neque provident deleniti a perferendis autem
							eaque impedit temporibus natus.
						</p>
					</div>
					<div>
						<h1 className="md:text-lg">Como participar</h1>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Delectus mollitia repellendus amet? Incidunt fugit nesciunt
							deserunt corrupti architecto, magni veritatis ab quasi
							voluptate eum? Quae sapiente nam sequi alias iure. Dolore
							commodi illum autem libero quisquam sed doloremque dicta
							consequuntur ipsum, cumque aut veniam sit officiis itaque
							totam et nesciunt illo impedit porro voluptates accusamus
							praesentium tenetur nisi! Unde, suscipit!
						</p>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-2 w-fit">
					{tags.map((item, index) => (
						<div
							key={index}
							className="bg-zinc-800 w-fit text-zinc-500 rounded-full px-3 py-1"
						>
							{item}
						</div>
					))}
				</div>
				<div className="flex w-full justify-end md:text-lg lg:text-xl ">
					<MainButton>Marcar presença</MainButton>
				</div>
			</div>
			<ConfirmModal
				isOpen={openConfirm}
				Message=""
				onClose={() => setOpenConfirm(false)}
				onConfirm={() => {
					setOpenConfirm(false);
				}}
			/>
		</>
	);
}
