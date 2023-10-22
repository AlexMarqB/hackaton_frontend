"use client"
import { BoxSelect, Check, CheckSquare } from "lucide-react";
import { useState } from "react";

interface CheckboxProps {   
    checked: boolean;
    onClick: (x:boolean) => void;
    key: string;
}

export function Checkbox({key, onClick, checked}: CheckboxProps) {

    return (
        <button onClick={(e) => {
            e.preventDefault()
            onClick(!checked)}} key={key} className=" text-zinc-500 items-center border-zinc-500 w-3 h-3">
            {checked ? <CheckSquare className="w-4 h-4 text-lime-500"/> : <BoxSelect className="w-4 h-4"/>}
        </button>
    )
}