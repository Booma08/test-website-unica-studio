import React from "react";

type BentoGridProps = {
    children: React.ReactNode;
};

export default function BentoGrid({ children }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-screen-lg mx-auto px-4">
            {children}
        </div>
    );
}
