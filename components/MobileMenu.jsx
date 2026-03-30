"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu({ works }) {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    const pathname = usePathname();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                closeMenu();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <button
                tabIndex={-1}
                className={`hamburger ${isOpen ? "is-active" : ""}`}
                type="button"
                aria-label="メニューを開く"
                aria-controls="drawer"
                aria-expanded={isOpen}
                onClick={(e) => {
                    setIsOpen((prev) => !prev);
                    e.currentTarget.blur();
                }}
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
                        <Link
                            href="/"
                            tabIndex={-1}
                            className={`drawer__link ${pathname === "/" ? "is-active" : ""}`}
                            onClick={closeMenu}
                        >
                            HOME
                        </Link>
                    </li>

                    <li className="drawer__item">
                        <Link
                            href="/about"
                            tabIndex={-1}
                            className={`drawer__link ${pathname === "/about" ? "is-active" : ""}`}
                            onClick={closeMenu}
                        >
                            ABOUT
                        </Link>
                    </li>

                    <li className="drawer__item">
                        <Link
                            href="/works"
                            tabIndex={-1}
                            className={`drawer__link ${pathname === "/works" ? "is-active" : ""}`}
                            onClick={closeMenu}
                        >
                            WORKS
                        </Link>
                    </li>
                </ul>

                <ul className="drawer__works-list">
                    {works.map((work) => (
                        <li className="drawer__works-item" key={`${work.slug}-${work.href}`}>
                            <Link
                                href={work.href}
                                tabIndex={-1}
                                className={`drawer__works-link ${pathname === work.href ? "is-active" : ""
                                    }`}
                                onClick={closeMenu}
                            >
                                {work.title}
                            </Link>
                        </li>
                    ))}
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