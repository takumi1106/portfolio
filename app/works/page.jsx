import Link from "next/link";
import SummerTriangle from "@/components/SummerTriangle";
import { getWorksList } from "@/lib/markdown";

export default function WorksPage() {
    const works = getWorksList();

    return (
        <>
            <SummerTriangle />

            <header className="header">
                <div className="header__inner">
                    <Link href="/">
                        <h1 className="header__title">PORTFOLIO</h1>
                        <p className="header__sub-title">feat.Goto Takumi</p>
                    </Link>
                </div>
            </header>

            <aside className="side-nav">
                <nav className="side-nav__nav" aria-label="グローバルナビゲーション">
                    <ul className="side-nav__list">
                        <li className="side-nav__item"><Link className="side-nav__link" href="/">HOME</Link></li>
                        <li className="side-nav__item"><Link className="side-nav__link" href="/about">ABOUT</Link></li>
                        <li className="side-nav__item"><Link className="side-nav__link is-active" href="/works">WORKS</Link></li>
                    </ul>

                    <div className="side-nav__works">
                        <h3 className="side-nav__works-title">作品紹介</h3>
                        <ul className="side-nav__works-list">
                            {works.map((work) => (
                                <li key={`${work.slug}-${work.href}`}>
                                    <Link className="side-nav__works-link" href={work.href}>
                                        {work.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </aside>

            <button className="hamburger" type="button" aria-label="メニューを開く" aria-controls="drawer" aria-expanded="false">
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
            </button>

            <nav id="drawer" className="drawer" aria-label="モバイルナビゲーション">
                <ul className="drawer__list">
                    <li className="drawer__item"><Link href="/" className="drawer__link">HOME</Link></li>
                    <li className="drawer__item"><Link href="/about" className="drawer__link">ABOUT</Link></li>
                    <li className="drawer__item"><Link href="/works" className="drawer__link">WORKS</Link></li>
                    <li className="drawer__item"><a href="#contact" className="drawer__link">CONTACT</a></li>
                </ul>
            </nav>

            <div className="drawer__overlay" hidden></div>

            <main className="main">
                <section className="workslist">
                    <h2 className="workslist__title">WORKS</h2>
                    <div className="workslist__inner">
                        <ul className="workslist__list">
                            {works.map((work) => (
                                <li className="workslist__item" key={`${work.slug}-${work.href}`}>
                                    <article className="workslist__box">
                                        <p className="workslist__label">{work.label}</p>
                                        <h3 className="workslist__box-title">{work.title}</h3>
                                        <Link className="workslist__link" href={work.href}>
                                            <div className="workslist__img">
                                                <img src={work.image} alt={work.title} />
                                            </div>
                                        </Link>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>

            <footer className="footer" id="contact">
                <h2 className="footer__title sub-title">CONTACT</h2>
                <div className="footer__inner">
                    <address className="footer__contact">
                        <div className="footer__item">
                            <p className="footer__label">ブログ</p>
                            <a href="" className="footer__link">Visit blog →</a>
                        </div>
                        <div className="footer__item">
                            <p className="footer__label">メールアドレス</p>
                            <a href="" className="footer__link">Email me →</a>
                        </div>
                        <div className="footer__item">
                            <p className="footer__label">GitHub</p>
                            <a href="" className="footer__link">View GitHub →</a>
                        </div>
                    </address>
                    <small className="footer__copy">&copy;2026 Goto Takumi</small>
                </div>
            </footer>
        </>
    );
}