"use client"
import { useState } from "react";
import { CancelButton, MainButton } from "../../Buttons";
import { CheckCircle } from "lucide-react";
import { Checkbox } from "../../Checkbox";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
}

export function AvaliationModal({
	isOpen,
	onClose,
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
                            <h1>Obrigado por avaliar!</h1>
						</div>
					) : (
					<div className="fixed w-3/4 h-1/2 flex-col gap-8 border-2 border-zinc-500 text-zinc-500 p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-100 z-30 flex items-center justify-center">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col gap-4">
                                <h1>Pontos de sustentabilidade</h1>
                                <div className="grid grid-cols-2">
                                    <div className="flex w-full items-center gap-3">Opção 1 <Checkbox key="opção1" /></div>
                                    <div className="flex w-full items-center gap-3">Opção 1 <Checkbox key="opção1" /></div>
                                    <div className="flex w-full items-center gap-3">Opção 1 <Checkbox key="opção1" /></div>
                                    <div className="flex w-full items-center gap-3">Opção 1 <Checkbox key="opção1" /></div>
                                </div>
								<h1>Pontos de acessibilidade</h1>
                                <div className="grid grid-cols-2">
                                    <div className="flex w-full items-center gap-3">Opção 1 <Checkbox key="opção1" /></div>
                                    <div className="flex w-full items-center gap-3">Opção 1 <Checkbox key="opção1" /></div>
                                    <div className="flex w-full items-center gap-3">Opção 1 <Checkbox key="opção1" /></div>
                                    <div className="flex w-full items-center gap-3">Opção 1 <Checkbox key="opção1" /></div>
                                </div>
                            </div>
                        </div>
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
