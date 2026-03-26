import { getWorksList } from "@/lib/markdown";
import Link from "next/link";
import SummerTriangle from "@/components/SummerTriangle";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  const works = getWorksList();
  const topWorks = works.slice(0, 4);

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
            <li className="side-nav__item"><Link className="side-nav__link is-active" href="/">HOME</Link></li>
            <li className="side-nav__item"><Link className="side-nav__link" href="/about">ABOUT</Link></li>
            <li className="side-nav__item"><Link className="side-nav__link" href="/works">WORKS</Link></li>
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

      <MobileMenu />

      <main className="main" id="home">
        <section className="mainvisual">
          <div className="mainvisual__inner">
            <h2 className="mainvisual__title">成長の過程を可視化した軌跡</h2>
            <p className="mainvisual__title__sub-title">— これまでと、これからをつなぐ</p>
            <p className="mainvisual__scroll">
              scroll<br />
              ↓
            </p>
          </div>
        </section>

        <section className="top-about">
          <h2 className="top-about__title sub-title">ABOUT</h2>
          <div className="top-about__inner">
            <div className="top-about__body">
              <div className="top-about__img">
                <img src="/image/page2.jpeg" alt="" />
              </div>
              <div className="top-about__main">
                <div className="top-about__school">
                  <p className="name"><span className="label visually-hidden">学校</span>
                    トライデントコンピュータ専門学校</p>
                  <p className="department"><span className="label visually-hidden">学科</span> Webデザイン学科</p>
                </div>
                <p className="top-about__myname">
                  後藤　匠
                </p>
                <div className="top-about__profile">
                  <p className="birthplace"><span className="label">出身地</span>三重県</p>
                  <p className="occupation"><span className="label">志望職種</span>フロントエンドエンジニア</p>
                </div>
                <div className="top-about__text">
                  <p>アクセシビリティと扱いやすさを<br />
                    重視したWeb制作を大切にしています。</p>
                </div>
              </div>
            </div>
            <Link href="/about" className="top-about__view">View about →</Link>
          </div>
        </section>

        <section className="works">
          <h2 className="works__title sub-title">WORKS</h2>
          <div className="works__inner">
            <ul className="works__list">
              {topWorks.map((work) => (
                <li className="works__item" key={`${work.slug}-${work.href}`}>
                  <article className="works__box">
                    <p className="works__label">{work.label}</p>
                    <h3 className="works__box-title">{work.title}</h3>
                    <Link className="works__link" href={work.href}>
                      <div className="works__img">
                        <img src={work.image} alt={work.title} />
                      </div>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
            <Link href="/works" className="works__view">View works →</Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <h2 className="footer__title sub-title">CONTACT</h2>
        <div className="footer__inner">
          <address className="footer__contact">
            <div className="footer__item">
              <p className="footer__label">ブログ</p>
              <Link href="" className="footer__link">Visit blog →</Link>
            </div>
            <div className="footer__item">
              <p className="footer__label">メールアドレス</p>
              <Link href="" className="footer__link">Email me →</Link>
            </div>
            <div className="footer__item">
              <p className="footer__label">GitHub</p>
              <Link href="" className="footer__link">View GitHub →</Link>
            </div>
          </address>
          <small className="footer__copy">&copy;2026 Goto Takumi</small>
        </div>
      </footer>
    </>
  );
}