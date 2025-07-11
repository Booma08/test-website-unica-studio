"use client";

import React from "react";
import BentoGrid from "@/components/BentoGrid";
import BentoCard from "@/components/BentoCard";

export default function PortfolioPage() {
    return (
        <main className="pt-28 px-4">
            <h1 className="text-4xl font-bold text-center mb-10">Portfolio</h1>
            <BentoGrid>
                <BentoCard
                    title="Exploration spatiale"
                    imageSrc="/images/Leopard-Des-Neiges.png"
                    link="/projets/exploration"
                />
                <BentoCard
                    title="Rendu stylisé"
                    imageSrc="/images/panthera-uncia.png"
                    link="/projets/rendu"
                />
                <BentoCard
                    title="Rendu stylisé"
                    imageSrc="/images/panthera-uncia.png"
                    link="/projets/rendu"
                />
            </BentoGrid>
        </main>
    );
}
