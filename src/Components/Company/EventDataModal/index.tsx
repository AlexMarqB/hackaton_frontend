"use client"
import { Award } from "lucide-react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
    target: any;
}

export function EventDataModal({
	isOpen,
	onClose,
	target,
	onConfirm,
}: ModalProps) {

	return (
        <>
			{isOpen && (
                <>
						<button
						onClick={() => onClose}
						className="inset-0 w-full h-screen backdrop-blur-sm fixed z-10"
					/>
					<div className="flex flex-col px-4 border-2 border-zinc-500 text-zinc-500">
                        <div className="flex gap-4 w-full">
                            <img src={target.img} alt="logo" className="w-1/4"/>
                            <h1>{target.title}</h1>
                        </div>
                        <h1>O que este evento te garantiu: </h1>
                        <div className="grid grid-cols-3 gap-3">
                            {target.badges.map((item, index) => (
                                <div key={index} className="rounded-full border-zinc-500 w-10 h-10">
                                    <Award />
                                </div>
                            ))}
                        </div>
                        <h1 className="">Comentários:</h1>
                        {target.comments.map((item, index) => (
                            <div key={index} className="bg-zinc-500 text-zinc-800 text-justify">
                                {item}
                            </div>
                        ))}
                    </div>
                    </>
            )}
		</>
	)
}