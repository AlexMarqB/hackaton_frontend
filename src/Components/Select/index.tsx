"use client"
import { ComponentProps } from "react"

type SelectProps = ComponentProps<'select'>

export function SelectRoot(props: SelectProps) {
    return (
        <select className="w-full outline-none py-2 px-1 border-2 border-zinc-500 text-zinc-500" {...props}/>
    )
} 

type OptionProps = ComponentProps<'option'>

export function Option(props: OptionProps) {
    return (
        <option className="w-1/2 border-zinc-500 text-zinc-500" {...props}/>
    )
}