---
title: PORTFOLIO
category: 個人制作品（ポートフォリオ）
date: 2026
url: https://portfolio-delta-self-19.vercel.app/

thumbnail: /image/portfolio_main.webp
alt: ポートフォリオの作品画像

periodLabel: 制作期間
period: 2026年 1月下旬 ~ 4月上旬（約3ヶ月）

roleLabel: 担当範囲
role: 企画 / コーディング / デザイン

techLabel: 作成技術
tech: Next.js / HTML / CSS（Sass）/ JavaScript / Markdown

toolsLabel: 制作ツール
tools: VSCode / Figma / Photoshop / Illustrator / Vercel / GitHub / 生成Ai（補助的に使用）

overview:
  - 就職活動において、これまでに制作してきた作品をまとめたポートフォリオサイトです。
  - 作品だけでなく、制作の意図や工夫した点が伝わるように構成しています。
  - Next.jsを用いて静的サイトとして構築し、アクセシビリティやSEOを意識して制作しました。Markdownを導入することで、新たな作品追加時にも効率的に更新できる構成にしています。

process:
  - title: テーマ決め
    type: research
    lead: 専門学校入学後、上級生のポートフォリオ発表を見たことをきっかけに、自分の制作にもテーマ性を持たせたいと考えました。そこで、自分の好きな楽曲に登場する「夏の大三角」をモチーフとして取り入れ、デザインのコンセプトとしています。

  - title: デザイン
    type: visual
    lead: まず、コンセプトである「夏の大三角」に合う世界観を考え、夜空をイメージしたデザインとしました。その上で、見やすさやページ遷移のしやすさといったユーザビリティも意識しながら、Figmaを用いてデザインを制作しました。
    images:
      - /image/portfolio_design.webp
      - /image/portfolio_color.webp
    desc:
      - デザインを行う際には、まず配色を重視して検討しました。
       背景色・夏の大三角を表現する色・文字の配色といった要素を整理し、全体の統一感と視認性の両立を図っています。
       特に文字色については、背景とのコントラストを考慮し、視認性やアクセシビリティにも配慮しました。
      - また、情報が読みやすくなるよう、要素の配置や余白の取り方を意識して設計しています。視線の流れや情報の優先度を踏まえ、ユーザーが直感的に内容を把握できるレイアウトとしました。さらに、余白を適切に設けることで各要素の区切りを明確にし、可読性の向上につなげています。

  - title: コーディング
    type: coding
    code: |
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
    text:
    - Next.jsは、静的サイトとの相性が良く、高速な表示が可能である点から採用しました。
      また、コンポーネント単位で設計することで再利用性を高められる点も理由の一つです。
    - さらに、データとUIを分離して管理できるため構造を整理しやすく、保守性の向上にもつながると考えています。加えて、Vercelと連携することでデプロイや更新が容易に行える点も魅力であり、開発から公開までを効率的に行える環境を構築しました。
    subCode: |
      <!-- 日昇工業所の作品詳細ページで使用しているMarkdownデータの一例 -->
      ---
      title: 日昇工業所｜公式サイト
      category: 進級制作品
      date: 2026
      url: https://goto-take-1106.secret.jp/nissyo/index.html

      thumbnail: /image/nissyo_main.webp
      alt: 日昇工業所の公式サイトの作品画像

      periodLabel: 制作期間
      period: 2025年 10月 ~ 2026年 1月（約3ヶ月）

      roleLabel: 担当範囲
      role: 企画 / コーディング / デザイン
      techLabel: 作成技術
      tech: HTML / CSS（Sass）/ JavaScript / microCMS

      toolsLabel: 制作ツール
      tools: VSCode / Figma / Photoshop / Illustrator / Formspree / GitHub / 生成Ai（補助的に使用）

      overview:
        - 三重県伊勢市にある配管工事業者「日昇工業所」のコーポレートサイトを制作させていただきました。
        - サイトの更新頻度が低い点を踏まえ、表示速度や保守性を重視した静的サイトとして設計し、お知らせなどの更新が必要な箇所には microCMS を導入しています。
        - また、誰にとっても使いやすい構成を意識し、情報の見やすさや操作のしやすさにも配慮しました。
    subText:
     作品情報の管理にはMarkdown形式を採用しており、Next.jsとの相性が良くデータとして扱いやすい点に加え、テキストベースで記述できるため更新が容易であり、GitHubとVercelの連携によって変更内容を自動で反映できる開発フローを構築できる点を理由に選定し、今回の制作では新たな技術として運用にも挑戦しました。

  - title: 細かい調整
    type: adjustment
    text:
      - 制作の最終段階では、表示速度や視認性を意識し、細かな調整を行いました。
        PageSpeed Insightsを使用してスコアを確認しながら改善を進め、パフォーマンスとアクセシビリティの向上を図っています。確認しながら改善を進め、パフォーマンスとアクセシビリティの向上に取り組んでいます。
      - 具体的には、背景の星の数を調整することで描画負荷を抑えつつ、画面の印象が弱くならないようバランスを整えました。
        また、画像のアスペクト比を統一することでレイアウトの安定性を高め、視覚的な統一感を意識しています。
      - これらの改善により、一部項目ではスコア100を達成するなど、パフォーマンスと視認性の向上に取り組みました。

ingenuity:
  - title: ページ移行の工夫
    type: approach
    blocks:
    - image: /image/portfolio_menu.webp
      text:
        - 1つはページ移動のしやすさを意識しました。
          画面右側に各ページへのリンクを配置することで、ユーザーが見たいページへすぐに移動できるようにしています。
        - また、現在表示しているページが分かりやすくなるよう、該当するナビゲーション項目には下線を表示しました。
          これにより、ユーザーが今どのページを見ているのかを直感的に把握できるようにしています。

  - title: 読みやすさへの配慮
    type: approach
    blocks:
    - image:
      text:
        - デザイン面では、装飾を控えめにすることで、情報が埋もれないようにし、内容の読みやすさを重視しました。視覚的なノイズを減らすことで、ユーザーが必要な情報をスムーズに把握できるようにしています。
    - image: /image/portfolio_contrast.webp
      text:
        - また、背景色と文字色のコントラストに配慮し、視認性やアクセシビリティの向上を意識しました。特に文字が読みづらくならないよう、十分なコントラスト比を確保しています。
        - さらに、余白を広めに設けることで要素同士の区切りを明確にし、情報の整理と可読性の向上につなげました。

  - title: Markdownでの工夫
    type: approach
    blocks:
    - code: |
          process:
            - title: ヒアリング
            type: research

            - title: デザイン
            type: visual
      text:
        - ポートフォリオ全体で工程の順序を統一しているため、Markdownでの記述においてもその順序に対応したtype名を設定し、各項目の役割を明確にしました。例えば、visualではデザインに関する内容、researchでは調査内容といったように、typeごとに記述内容を定義しています。
        - これにより、記述ルールを統一し、データの一貫性を保ちながら、修正や追加にも対応しやすい構造としました。

reflection:
  - 今回の制作を通して、Next.jsやVercelを初めて使用し、開発からデプロイまでの一連の流れを経験することができました。実装を進める中で理解を深め、基本的な構成や運用の考え方を身につけています。
  - また、Next.jsを用いた構成により、Markdownでコンテンツを管理する仕組みを構築し、更新しやすく保守性の高いサイト設計を行いました。
  - さらに、ターミナル操作にも慣れ、npm run dev などの基本的なコマンドを用いて開発環境を扱えるようになりました。
  - 今後は、Markdownによるコンテンツ管理にもさらに慣れ、継続的に作品の追加や改善を行いながら、ポートフォリオの内容を充実させていきたいと考えています。
---