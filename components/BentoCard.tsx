import Image from "next/image";
import Link from "next/link";

type BentoCardProps = {
    title: string;
    imageSrc: string;
    year?: string;
    link: string;
};

export default function BentoCard({
                                      title,
                                      imageSrc,
                                      year = "2025",
                                      link,
                                  }: BentoCardProps) {
    return (
        <Link
            href={link}
            className="relative block rounded-4xl overflow-hidden aspect-square group transition-transform hover:scale-[1.02]"
        >
            {/* Image de fond */}
            <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 ease-in-out"
            />

            {/* Overlay au hover */}
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h3 className="text-white text-xl font-semibold">{title}</h3>
                <p className="text-white text-sm mt-1">{year}</p>
            </div>
        </Link>
    );
}
