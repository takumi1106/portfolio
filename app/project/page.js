import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import SummerTriangle from "@/components/SummerTriangle";

export default function ProjectPage() {
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
                            <Link className="side-nav__link" href="/works">WORKS</Link>
                        </li>
                    </ul>

                    <div className="side-nav__works">
                        <h3 className="side-nav__works-title">作品紹介</h3>
                        <ul className="side-nav__works-list">
                            <li><a className="side-nav__works-link" href="#work-blog">ブログサイト</a></li>
                            <li><a className="side-nav__works-link" href="#work-nissho is-active">日昇工業所｜公式サイト</a></li>
                            <li><a className="side-nav__works-link" href="#work-card">名刺デザイン</a></li>
                        </ul>
                    </div>
                </nav>
            </aside>

            <main className="main">
                <section className="project">
                    <div className="project__inner">
                        <p className="project__category">
                            進級制作品　[Webサイト]
                        </p>
                        <h2 className="project__title">
                            日昇工業所｜公式サイト
                        </h2>
                        <div className="project__img">
                            <img src="/image/images-001.webp" alt="" />
                        </div>
                        <div class="url-wrapper">
                            <a class="url" href="https://goto-take-1106.secret.jp/nissyo/index.html">
                                サイトを見る →
                            </a>
                        </div>
                        <div className="project__list">
                            <div className="project__item list__item">
                                <h3 className="project__item-title list__title">制作期間</h3>
                                <p className="project__item-text list__text">10月~1月(約3ヶ月)</p>
                            </div>
                            <div className="project__item list__item">
                                <h3 className="project__item-title list__title">担当範囲</h3>
                                <p className="project__item-text list__text">企画　/　コーディング　/　デザイン</p>
                            </div>
                        </div>
                        <div className="project__item list__item">
                            <h3 className="project__item-title list__title">作成技術</h3>
                            <p className="project__item-text list__text">HTML 　/ 　CSS（Sass, BEM設計） /<br />
                                JavaScript　/　microCMS
                            </p>
                        </div>
                        <div className="project__item project__tool-item list__item">
                            <h3 className="project__item-title list__title">制作ツール</h3>
                            <p className="project__item-text list__text">VSCode　/　Figma　/　Photoshop　/<br />Illustrator　/　Formspree　/<br />生成Ai（補助的に使用）
                            </p>
                        </div>
                    </div>
                </section>
                <section className="overview">
                    <h2 className="overview__title sub-title">
                        作品概要
                    </h2>
                    <div className="overview__inner">
                        <div className="overview__text">
                            <p>三重県伊勢市にある配管工事業者「日昇工業所」のコーポレートサイトを制作させていただきました。</p>
                            <p>サイトの更新頻度が低い点を踏まえ、表示速度や保守性を重視した静的サイトとして設計し、お知らせなどの更新が必要な箇所には microCMS を導入しています。</p>
                            <p>また、誰にとっても使いやすい構成を意識し、情報の見やすさや操作のしやすさにも配慮しました。</p>
                        </div>
                    </div>
                </section>
                <section className="process">
                    <h2 className="process__title sub-title">
                        制作工程
                    </h2>
                    <div className="process__inner">
                        <div className="process__item list__item">
                            <h3 className="process__item-title list__title">ヒアリング</h3>
                            <div className="process__item-inner">
                                <div className="process__text
                            process__hearing-text">
                                    <p>まず、クライアントと直接対面でヒアリングを行い、サイトの目的や掲載内容、<br />更新頻度などを確認しました。その上で、デザインや機能面について以下の要望をいただきました。</p>
                                </div>
                                <ul className="process__list">
                                    <li>デザインはシンプルで、堅苦しすぎない雰囲気にしたい</li>
                                    <li>白と青を基調とした配色（アクセントに黄色）</li>
                                    <li>下請け業者としての信頼感が伝わるデザイン</li>
                                </ul>
                            </div>
                        </div>
                        <div className="process__item list__item">
                            <h3 className="process__item-title list__title">デザイン</h3>
                            <div className="process__item-inner">
                                <div className="process__text process__design-lead">
                                    <p>ヒアリングを終えた後、デザイン工程に移りました。<br />デザイン制作には Figma を使用し、画面構成や配色を具体化していきました。</p>
                                </div>
                                <figure className="process__img process__img-design">
                                    <img src="/image/nissyo-note.webp" alt="" />
                                    <img src="/image/nissyo-design.webp" alt="" />
                                </figure>
                                <div className="process__text process__design-desc">
                                    <p>まずはノートに簡単なラフを描き、クライアントに共有することで、サイト全体の雰囲気や方向性をすり合わせました。</p>
                                    <p>その内容をもとに、Figma 上でレイアウトや配色を調整しながらデザインを詰めていきました。</p>
                                    <p>制作の途中で何度か修正を重ねたため初期案からは大きく変化しましたが、最終的にはクライアントにも納得していただけるデザインに仕上げることができました。</p>
                                </div>
                            </div>
                        </div>
                        <div className="process__item list__item">
                            <h3 className="process__item-title list__title">コーディング</h3>
                            <div className="process__item-inner">
                                <div className="process__body">
                                    <figure className="process__img process__code-img">
                                        <img src="/image/nissyo-code1.webp" alt="" />
                                    </figure>
                                    <div className="process__text process__code-text">
                                        <p>まずはHTMLでページ全体の構造を組み、<br />BEM設計を意識しながらSassでスタイルを実装しました。</p>
                                        <p>デザイン通りに再現するだけでなく、後から修正しやすい構成になるようクラス設計にも配慮しています。</p>
                                        <p>また、後から自分以外の人が見ても理解しやすいよう、Sass内に意図や注意点をコメントとして残しながら実装しました。保守性を意識し、引き継ぎしやすいコードになるよう工夫しています。</p>
                                    </div>
                                </div>
                                <div className="process__cms">
                                    <figure className="process__img process__code-img">
                                        <img src="/image/nissyo-code2.webp" alt="" />
                                    </figure>
                                    <div className="process__text process__cms-text">
                                        <p>microCMSのAPIキーをフロント側に露出させないため、PHPで中継する構成を採用しました。これにより、セキュリティを確保しつつ、最新のお知らせを取得できるようにしています。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="process__item list__item">
                            <h3 className="process__item-title list__title">細かい調整</h3>
                            <div className="process__item-inner">
                                <div className="process__text process__adjustment-text">
                                    <p>実装後は、余白やフォーカス表示、細かい配色の調整に加え、画面サイズによるズレやレイアウトの崩れも修正し、
                                        全体の完成度を高める仕上げを行いました。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ingenuity">
                    <h2 className="ingenuity__title sub-title">
                        工夫した点
                    </h2>
                    <div className="ingenuity__inner">
                        <div className="ingenuity__item list__item ">
                            <h3 className="ingenuity__item-title list__title">更新性の工夫</h3>
                            <div className="ingenuity__item-inner">
                                <div className="ingenuity__body">
                                    <figure className="ingenuity__img ingenuity__top-img">
                                        <img src="/image/nissyo-cms1.webp" alt="" />
                                    </figure>
                                    <div className="ingenuity__text ingenuity__top-text">
                                        <p>更新されたお知らせをファーストビューに表示し、サイトを開いてすぐ確認できるようにしました。また、古い情報ばかりにならないよう、最新3件のみ表示しています。</p>
                                    </div>
                                </div>
                                <div className="ingenuity__body">
                                    <figure className="ingenuity__img ingenuity__cms-img">
                                        <img src="/image/nissyo-cms2.webp" alt="" />
                                    </figure>
                                    <div className="ingenuity__text ingenuity__cms-text">
                                        <p>microCMSの管理画面では、入力ミスや記述のばらつきを防ぐため、APIスキーマを設定して入力項目を制限しました。
                                            当初は入力箇所が分かりにくい状態だったため、必須項目や入力形式を定義し、管理者がどこに何を入力すればよいか分かりやすい構造にしています。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ingenuity__item list__item">
                            <h3 className="ingenuity__item-title list__title">操作性への配慮</h3>
                            <div className="ingenuity__item-inner">
                                <div className="ingenuity__operation">
                                    <figure className="ingenuity__img ingenuity__operation-img">
                                        <img src="/image/nissyo-operation1.webp" alt="" />
                                        <img src="/image/nissyo-operation2.webp" alt="" />
                                    </figure>
                                    <div className="ingenuity__text ingenuity__operation-text">
                                        <p>マウス操作だけでなく、キーボード操作も想定し、Tabキーによる移動やフォーカス表示が分かりやすくなるよう配慮しました。HTMLの標準要素を使用し、環境に依存しにくい操作性を意識しました。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ingenuity__item list__item">
                            <h3 className="ingenuity__item-title list__title">送信・運用の工夫</h3>
                            <div className="ingenuity__item-inner">
                                <div className="ingenuity__body">
                                    <figure className="ingenuity__img ingenuity__form-img">
                                        <img src="/image/nissyo-form1.webp" alt="" />
                                    </figure>
                                    <div className="ingenuity__text ingenuity__form-text">
                                        <p>静的サイト構成のため、サーバー実装不要で導入できる Formspree を採用しました。HTML + JavaScript のみで実装し、表示の軽さと運用のしやすさを意識しています。</p>
                                    </div>
                                </div>
                                <div className="ingenuity__body">
                                    <figure className="ingenuity__img ingenuity__confirmation-img">
                                        <img src="/image/nissyo-form2.webp" alt="" />
                                    </figure>
                                    <div className="ingenuity__text ingenuity__confirmation-text">
                                        <p>また、誤送信を防ぐため、送信前に内容を確認できる画面を用意しました。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="reflection">
                    <h2 className="reflection__title sub-title">
                        作品を通じて
                    </h2>
                    <div className="reflection__inner">
                        <div className="reflection__text">
                            <p>三重県伊勢市にある配管工事業者「日昇工業所」のコーポレートサイトを制作しました。</p>
                            <p>サイトの更新頻度が低い点を踏まえ、表示速度や保守性を重視した静的サイトとして設計し、お知らせなどの更新が必要な箇所には microCMS を導入しています。</p>
                            <p>また、誰にとっても使いやすい構成を意識し、情報の見やすさや操作のしやすさにも配慮しました。</p>
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
            <Script src="/js/script.js" strategy="afterInteractive" />
        </>
    );
}