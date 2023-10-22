"use client"
import { ComponentProps } from "react"

type ButtonProps = ComponentProps<'button'>

export function MainButton(props: ButtonProps) {
    return (
        <button className="bg-zinc-800 border py-2 px-1 rounded-md border-zinc-800 text-zinc-100 border-sm" {...props}/>
    )
}

export function GhostButton(props: ButtonProps) {
    return (
        <button className="bg-transparent border py-2 px-1 rounded-md border-zinc-800 text-zinc-800" {...props}/>
    )
}

export function CancelButton(props: ButtonProps) {
    return (
        <button className="bg-transparent border py-2 px-1 rounded-md border-red-600 text-red-600" {...props}/>
    )
}