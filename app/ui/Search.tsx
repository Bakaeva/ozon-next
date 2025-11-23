'use client';

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [search, setSearch] = useState('');

    const useFilter = (value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('search', value);
        } else {
            params.delete('search');
        };

        router.replace(`${pathname}?${params.toString()}`);
    };

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        const searchParam = params.get('search');
        setSearch(searchParam ? searchParam : '');
    }, []);

    return (
        <div className="search">
            <div className="search-wrapper">
                <input
                    className="search-wrapper_input"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="search-btn">
                <button onClick={() => useFilter(search)}></button>
            </div>
        </div>
    );
}