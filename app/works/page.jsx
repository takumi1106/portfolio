import Link from "next/link";
import SummerTriangle from "@/components/SummerTriangle";

export default function WorksPage() {
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
                            <li><a className="side-nav__works-link" href="#work-blog">ブログサイト</a></li>
                            <li><a className="side-nav__works-link" href="#work-nissho">日昇工業所｜公式サイト</a></li>
                            <li><a className="side-nav__works-link" href="#work-card">名刺デザイン</a></li>
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
                    <li className="drawer__item"><a href="#home" className="drawer__link">HOME</a></li>
                    <li className="drawer__item"><a href="#about" className="drawer__link">ABOUT</a></li>
                    <li className="drawer__item"><a href="#works" className="drawer__link">WORKS</a></li>
                    <li className="drawer__item"><a href="#contact" className="drawer__link">CONTACT</a></li>
                </ul>
            </nav>

            <div className="drawer__overlay" hidden></div>

            <main className="main">
                <section className="workslist">
                    <h2 className="workslist__title">WORKS</h2>
                    <div className="workslist__inner">
                        <ul className="workslist__list">
                            <li className="workslist__item">
                                <article className="workslist__box">
                                    <p className="workslist__label">進級制作品</p>
                                    <h3 className="workslist__box-title">日昇工業所｜公式サイト</h3>
                                    <a className="workslist__link" href="">
                                        <div className="workslist__img">
                                            <img src="./image/images-001.webp" alt="" />
                                        </div>
                                    </a>
                                </article>
                            </li>
                            <li className="workslist__item">
                                <article className="workslist__box">
                                    <p className="workslist__label">進級制作品</p>
                                    <h3 className="workslist__box-title">日昇工業所｜公式サイト</h3>
                                    <a className="workslist__link" href="/works/nissyo">
                                        <div className="workslist__img">
                                            <img src="/image/images-001.webp" alt="" />
                                        </div>
                                    </a>
                                </article>
                            </li>
                            <li className="workslist__item">
                                <article className="workslist__box">
                                    <p className="workslist__label">進級制作品</p>
                                    <h3 className="workslist__box-title">日昇工業所｜公式サイト</h3>
                                    <a className="workslist__link" href="">
                                        <div className="workslist__img">
                                            <img src="/image/images-001.webp" alt="" />
                                        </div>
                                    </a>
                                </article>
                            </li>
                            <li className="workslist__item">
                                <article className="workslist__box">
                                    <p className="workslist__label">進級制作品</p>
                                    <h3 className="workslist__box-title">日昇工業所｜公式サイト</h3>
                                    <a className="workslist__link" href="">
                                        <div className="workslist__img">
                                            <img src="/image/images-001.webp" alt="" />
                                        </div>
                                    </a>
                                </article>
                            </li>
                            <li className="workslist__item">
                                <article className="workslist__box">
                                    <p className="workslist__label">進級制作品</p>
                                    <h3 className="workslist__box-title">日昇工業所｜公式サイト</h3>
                                    <a className="workslist__link" href="">
                                        <div className="workslist__img">
                                            <img src="/image/images-001.webp" alt="" />
                                        </div>
                                    </a>
                                </article>
                            </li>
                            <li className="workslist__item">
                                <article className="workslist__box">
                                    <p className="workslist__label">進級制作品</p>
                                    <h3 className="workslist__box-title">日昇工業所｜公式サイト</h3>
                                    <a className="workslist__link" href="">
                                        <div className="workslist__img">
                                            <img src="./image/images-001.webp" alt="" />
                                        </div>
                                    </a>
                                </article>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
            <footer className="footer">
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