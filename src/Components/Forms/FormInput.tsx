import { ComponentProps } from "react";

type InputProps = ComponentProps<'input'>

export function FormInput(props: InputProps) {
    return (
        <input className="border-2 border-zinc-500 rounded-sm py-2 px-3" {...props}/>
    )
}