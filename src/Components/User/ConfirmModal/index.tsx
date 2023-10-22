"use client"
import { useState } from "react";
import { CancelButton, MainButton } from "../../Buttons";
import { CheckCircle } from "lucide-react";

interface ModalProps {
	isOpen: boolean;
	Message: string;
	onClose: () => void;
	onConfirm: () => void;
}

export function ConfirmModal({
	isOpen,
	onClose,
	Message,
	onConfirm,
}: ModalProps) {

	const [confirmed, setConfirmed] = useState(false)

	return (
		<>
			{isOpen && (
				<>
						<button
						onClick={() => onClose}
						className="inset-0 w-full h-screen backdrop-blur-sm fixed z-10"
					/>
					{confirmed ? (
						<div className="fixed w-3/4 h-1/2 flex-col gap-8 border-2 border-zinc-500 text-zinc-500 p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-100 z-30 flex items-center justify-center">
							<CheckCircle className="text-green-600 w-full" />
						</div>
					) : (
					<div className="fixed w-3/4 h-1/2 flex-col gap-8 border-2 border-zinc-500 text-zinc-500 p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-100 z-30 flex items-center justify-center">
						<h1 className="text-zinc-500 font-semibold tracking-wider">{Message}</h1>
						<div className="flex justify-between w-full gap-4">
							<CancelButton onClick={onClose}>Cancelar</CancelButton>
							<MainButton onClick={onConfirm}>Confirmar</MainButton>
						</div>
					</div>
					)}
				</>
			)}
		</>
	);
}
