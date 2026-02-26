import Image from "next/image";

export default function Home() {
  return (
    <>
      <canvas id="summerTriangle" class="bg-canvas"></canvas>

      <header class="header">
        <div class="header__inner">
          <h1 class="header__title">PORTFOLIO</h1>
          <p class="header__sub-title">feat.Goto Takumi</p>
        </div>
      </header>

      <aside class="side-nav">
        <nav class="side-nav__nav" aria-label="グローバルナビゲーション">
          <ul class="side-nav__list">
            <li class="side-nav__item"><a class="side-nav__link is-active" href="#home">HOME</a></li>
            <li class="side-nav__item"><a class="side-nav__link" href="about.html">ABOUT</a></li>
            <li class="side-nav__item"><a class="side-nav__link" href="works.html">WORKS</a></li>
            <li class="side-nav__item"><a class="side-nav__link" href="#contact">CONTACT</a></li>
          </ul>

          <div class="side-nav__works">
            <h3 class="side-nav__works-title">作品紹介</h3>
            <ul class="side-nav__works-list">
              <li><a class="side-nav__works-link" href="#work-blog">ブログサイト</a></li>
              <li><a class="side-nav__works-link" href="#work-nissho">日昇工業所｜公式サイト</a></li>
              <li><a class="side-nav__works-link" href="#work-card">名刺デザイン</a></li>
            </ul>
          </div>
        </nav>
      </aside>

      <button class="hamburger" type="button" aria-label="メニューを開く" aria-controls="drawer" aria-expanded="false">
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
      </button>

      <nav id="drawer" class="drawer" aria-label="モバイルナビゲーション">
        <ul class="drawer__list">
          <li class="drawer__item"><a href="#home" class="drawer__link">HOME</a></li>
          <li class="drawer__item"><a href="#about" class="drawer__link">ABOUT</a></li>
          <li class="drawer__item"><a href="#works" class="drawer__link">WORKS</a></li>
          <li class="drawer__item"><a href="#contact" class="drawer__link">CONTACT</a></li>
        </ul>
      </nav>

      <div class="drawer__overlay" hidden></div>

      <main class="main">
        <section class="mainvisual">
          <div class="mainvisual__inner">
            <h2 class="mainvisual__title">成長の過程を可視化した軌跡</h2>
            <p class="mainvisual__title__sub-title">— これまでと、これからをつなぐ</p>
            <p class="mainvisual__scroll">
              scroll<br />
              ↓
            </p>
          </div>
        </section>
        <section class="about">
          <div class="about__inner">
            <h2 class="about__title sub-title">ABOUT</h2>
            <div class="about__body">
              <div class="about__img">
                <img src="./image/page2.jpeg" alt="" />
              </div>
              <div class="about__main">
                <div class="about__school">
                  <p class="name"><span class="label visually-hidden">学校</span>
                    トライデントコンピュータ専門学校</p>
                  <p class="department"><span class="label visually-hidden">学科</span> Webデザイン学科</p>
                </div>
                <p class="about__myname">
                  後藤　匠
                </p>
                <div class="about__profile">
                  <p class="birthplace"><span class="label">出身地</span>三重県</p>
                  <p class="occupation"><span class="label">志望職種</span>フロントエンドエンジニア</p>
                </div>
                <div class="about__text">
                  <p>アクセシビリティと扱いやすさを<br />
                    重視したWeb制作を大切にしています。</p>
                </div>
              </div>
            </div>
            <a href="" class="about__view">View about →</a>
          </div>
        </section>
        <section class="works">
          <div class="works__inner">
            <h2 class="works__title sub-title">WORKS</h2>
            <ul class="works__list">
              <li class="works__item">
                <article class="works__box">
                  <p class="works__label">進級制作品</p>
                  <h3 class="works__box-title">日昇工業所｜公式サイト</h3>
                  <a class="works__link" href="">
                    <div class="works__img">
                      <img src="./image/images-001.webp" alt="" />
                    </div>
                  </a>
                </article>
              </li>
              <li class="works__item">
                <article class="works__box">
                  <p class="works__label">進級制作品</p>
                  <h3 class="works__box-title">日昇工業所｜公式サイト</h3>
                  <a class="works__link" href="">
                    <div class="works__img">
                      <img src="./image/images-001.webp" alt="" />
                    </div>
                  </a>
                </article>
              </li>
              <li class="works__item">
                <article class="works__box">
                  <p class="works__label">進級制作品</p>
                  <h3 class="works__box-title">日昇工業所｜公式サイト</h3>
                  <a class="works__link" href="">
                    <div class="works__img">
                      <img src="./image/images-001.webp" alt="" />
                    </div>
                  </a>
                </article>
              </li>
              <li class="works__item">
                <article class="works__box">
                  <p class="works__label">進級制作品</p>
                  <h3 class="works__box-title">日昇工業所｜公式サイト</h3>
                  <a class="works__link" href="">
                    <div class="works__img">
                      <img src="./image/images-001.webp" alt="" />
                    </div>
                  </a>
                </article>
              </li>
            </ul>
            <a href="" class="works__view">View works →</a>
          </div>
        </section>
      </main>
      <footer class="footer">
        <div class="footer__inner">
          <h2 class="footer__title sub-title">CONTACT</h2>
          <address class="footer__contact">
            <div class="footer__item">
              <p class="footer__label">ブログ</p>
              <a href="" class="footer__link">Visit blog →</a>
            </div>
            <div class="footer__item">
              <p class="footer__label">メールアドレス</p>
              <a href="" class="footer__link">Email me →</a>
            </div>
            <div class="footer__item">
              <p class="footer__label">GitHub</p>
              <a href="" class="footer__link">View GitHub →</a>
            </div>
          </address>
          <small class="footer__copy">&copy;2026 Goto Takumi</small>
        </div>
      </footer>
      <script src="./js/script.js"></script>
    </>
  );
}
