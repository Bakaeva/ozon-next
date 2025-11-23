'use client';

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function CategoryFilter() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);

    const useFilter = (value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('category', value);
        } else {
            params.delete('category');
        };

        router.replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="catalog-button">
            <button onClick={() => setIsOpen(!isOpen)}>
                <span className="catalog-button_burger"></span>
                <span className="catalog-button_text">Каталог</span>
            </button>

            <div className="catalog" style={{ display: isOpen ? 'block' : 'none' }}>
                <ul className="catalog-list">
                    <li onClick={() => useFilter('Игровая приставка')}>Игровая приставка</li>
                    <li onClick={() => useFilter('Периферия для ПК')}>Периферия для ПК</li>
                    <li onClick={() => useFilter('Игры и софт')}>Игры и софт</li>
                </ul>
            </div>
        </div>
    );
}