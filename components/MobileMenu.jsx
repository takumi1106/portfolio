"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <button
                className={`hamburger ${isOpen ? "is-active" : ""}`}
                type="button"
                aria-label="メニューを開く"
                aria-controls="drawer"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
            </button>

            <nav
                id="drawer"
                className={`drawer ${isOpen ? "is-open" : ""}`}
                aria-label="モバイルナビゲーション"
            >
                <ul className="drawer__list">
                    <li className="drawer__item">
                        <Link href="/" className="drawer__link" onClick={closeMenu}>
                            HOME
                        </Link>
                    </li>
                    <li className="drawer__item">
                        <Link href="/about" className="drawer__link" onClick={closeMenu}>
                            ABOUT
                        </Link>
                    </li>
                    <li className="drawer__item">
                        <Link href="/works" className="drawer__link" onClick={closeMenu}>
                            WORKS
                        </Link>
                    </li>
                </ul>
            </nav>

            {isOpen && (
                <div
                    className="drawer__overlay"
                    onClick={closeMenu}
                ></div>
            )}
        </>
    );
}