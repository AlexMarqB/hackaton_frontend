import { ComponentProps } from "react";

type ContainerProps = ComponentProps<'div'>

export function SearchRoot(props: ContainerProps) {
    return (
        <div className="flex w-full h-8 items-center gap-2 px-1 py-2 bg-zinc-100 rounded-sm border-2 border-zinc-500" {...props}/>
    )
}

type InputProps = ComponentProps<'input'>

export function SearchInput(props: InputProps) {
    return (
        <input className="w-full md:text-sm lg:text-md rounded-sm bg-zinc-100 text-zinc-500 outline-none" {...props}/>
    )
}