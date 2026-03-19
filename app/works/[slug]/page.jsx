import Link from "next/link";
import SummerTriangle from "@/components/SummerTriangle";
import { getWorkData } from "@/lib/markdown";

export default async function WorkDetailPage({ params }) {
    const { slug } = await params;
    const work = await getWorkData(slug);

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
                        <li className="side-nav__item">
                            <Link className="side-nav__link" href="/">HOME</Link>
                        </li>
                        <li className="side-nav__item">
                            <Link className="side-nav__link" href="/about">ABOUT</Link>
                        </li>
                        <li className="side-nav__item">
                            <Link className="side-nav__link is-active" href="/works">WORKS</Link>
                        </li>
                    </ul>

                    <div className="side-nav__works">
                        <h3 className="side-nav__works-title">作品紹介</h3>
                        <ul className="side-nav__works-list">
                            <li>
                                <Link className="side-nav__works-link" href="/works/blog">
                                    ブログサイト
                                </Link>
                            </li>
                            <li>
                                <Link className="side-nav__works-link is-active" href={`/works/${slug}`}>
                                    日昇工業所｜公式サイト
                                </Link>
                            </li>
                            <li>
                                <Link className="side-nav__works-link" href="/works/card">
                                    名刺デザイン
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>

            <main className="main">
                <section className="project">
                    <div className="project__inner">
                        <p className="project__category">
                            {work.category}　[Webサイト]
                        </p>

                        <h2 className="project__title">
                            {work.title}
                        </h2>

                        <div className="project__img">
                            <img src={work.thumbnail} alt={work.title} />
                        </div>

                        <div className="url-wrapper">
                            <a
                                className="url"
                                href={work.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                サイトを見る →
                            </a>
                        </div>

                        <div className="project__list">
                            <div className="project__item list__item">
                                <h3 className="project__item-title list__title">{work.periodLabel}</h3>
                                <p className="project__item-text list__text">{work.period}</p>
                            </div>

                            <div className="project__item list__item">
                                <h3 className="project__item-title list__title">{work.roleLabel}</h3>
                                <p className="project__item-text list__text">{work.role}</p>
                            </div>
                        </div>

                        <div className="project__item list__item">
                            <h3 className="project__item-title list__title">
                                {work.techLabel}
                            </h3>
                            <p className="project__item-text list__text">
                                {work.tech}
                            </p>
                        </div>

                        <div className="project__item project__tool-item list__item">
                            <h3 className="project__item-title list__title">{work.toolsLabel}</h3>
                            <p className="project__item-text list__text">{work.tools}</p>
                        </div>
                    </div>
                </section>

                <section className="overview">
                    <h2 className="overview__title sub-title">
                        作品概要
                    </h2>
                    <div className="overview__inner">
                        <div className="overview__text">
                            {work.overview.map((text, i) => (
                                <p key={i}>{text}</p>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="process">
                    <h2 className="process__title sub-title">
                        制作工程
                    </h2>
                    <div className="process__inner">
                        {work.process.map((item, i) => (
                            <div className="process__item list__item" key={i}>
                                <h3 className="process__item-title list__title">{item.title}</h3>

                                <div className="process__item-inner">
                                    {item.type === "hearing" && (
                                        <>
                                            <div className="process__text process__hearing-text">
                                                <p>{item.lead}</p>
                                            </div>

                                            <ul className="process__list">
                                                {item.points.map((point, index) => (
                                                    <li key={index}>{point}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                    {item.type === "design" && (
                                        <>
                                            <div className="process__text process__design-lead">
                                                <p>{item.lead}</p>
                                            </div>

                                            <figure className="process__img process__img-design">
                                                {item.images.map((src, index) => (
                                                    <img key={index} src={src} alt="" />
                                                ))}
                                            </figure>

                                            <div className="process__text process__design-desc">
                                                {item.desc.map((text, index) => (
                                                    <p key={index}>{text}</p>
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    {item.type === "coding" && (
                                        <>
                                            <div className="process__body">
                                                <figure className="process__img process__code-img">
                                                    <img src={item.mainImage} alt="" />
                                                </figure>

                                                <div className="process__text process__code-text">
                                                    {item.text.map((text, index) => (
                                                        <p key={index}>{text}</p>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="process__cms">
                                                <figure className="process__img process__code-img">
                                                    <img src={item.subImage} alt="" />
                                                </figure>

                                                <div className="process__text process__cms-text">
                                                    <p>{item.subText}</p>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {item.type === "adjustment" && (
                                        <div className="process__text process__adjustment-text">
                                            {item.text.map((text, index) => (
                                                <p key={index}>{text}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="ingenuity">
                    <h2 className="ingenuity__title sub-title">
                        工夫した点
                    </h2>
                    <div className="ingenuity__inner">
                        {work.ingenuity.map((item, i) => (
                            <div className="ingenuity__item list__item" key={i}>
                                <h3 className="ingenuity__item-title list__title">{item.title}</h3>

                                <div className="ingenuity__item-inner">
                                    {(item.type === "update" || item.type === "form") &&
                                        item.blocks.map((block, index) => (
                                            <div className="ingenuity__body" key={index}>
                                                <figure className="ingenuity__img">
                                                    <img src={block.image} alt="" />
                                                </figure>

                                                <div className="ingenuity__text">
                                                    <p>{block.text}</p>
                                                </div>
                                            </div>
                                        ))}

                                    {item.type === "operation" && (
                                        <div className="ingenuity__operation">
                                            <figure className="ingenuity__img ingenuity__operation-img">
                                                {item.images.map((src, index) => (
                                                    <img key={index} src={src} alt="" />
                                                ))}
                                            </figure>

                                            <div className="ingenuity__text ingenuity__operation-text">
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="reflection">
                    <h2 className="reflection__title sub-title">
                        作品制作を通じて
                    </h2>
                    <div className="reflection__inner">
                        <div className="reflection__text">
                            {work.reflection?.map((text, i) => (
                                <p key={i}>{text}</p>
                            ))}
                        </div>
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