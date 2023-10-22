import { Eye } from "lucide-react";

interface CardProps {
    title: string;
    img: string;
    comments: number;
    rating: number;
}

export function CatalogCards(data: CardProps) {
    return (
        <div className="w-fit px-2 self-center bg-white flex items-center justify-evenly">
            <img src={data.img || ''} alt="logo" className="w-1/3 md:w-1/4 lg:w-1/6"/>
            <div className="flex flex-col h-full gap-4 items-center">
                <h2 className="text-zinc-500 self md:text-lg lg:text-xl">{data.title}</h2>
                <p className="text-zinc-300 md:text-sm lg:text-lg">{data.comments} comentarios ~ {data.rating} avaliações</p>
            </div>
            <button type="button" className="flex">
            <Eye className="text-zinc-500"/>
            </button>
        </div>
        
    )
}