---
title: ポートフォリオ
category: 個人制作品
date: 2026
url: https://portfolio-delta-self-19.vercel.app/

thumbnail: /image/nissyo_main.webp
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
      - /image/nissyo-note.webp
      - /image/nissyo-design.webp
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
      - 実装後は、余白やフォーカス表示、細かい配色の調整に加え、画面サイズによるズレやレイアウトの崩れも修正し、全体の完成度を高める仕上げを行いました。

ingenuity:
  - title: 更新性の工夫
    type: approach
    blocks:
    - image: /image/nissyo-cms1.webp
      text:
        - 更新されたお知らせをファーストビューに表示し、サイトを開いてすぐ確認できるようにしました。
        - また、古い情報ばかりにならないよう、最新3件のみ表示しています。
    - image: /image/nissyo-cms2.webp
      text:
        - microCMSでは、入力ミスや記述のばらつきを防ぐためにAPIスキーマを設定し、入力項目を制限しました。
        - 必須項目や入力形式を定義することで、管理者が迷わず入力できる構造にしています。

  - title: 操作性への配慮
    type: approach
    blocks:
    - image: /image/nissyo-operation1.webp
      text:
        - マウス操作だけでなく、キーボード操作も想定し、Tabキーによる移動やフォーカス表示が分かりやすくなるよう配慮しました。
    - image: /image/nissyo-operation2.webp
      text:
        - HTMLの標準要素を使用し、環境に依存しにくい操作性を意識しました。

  - title: 送信・運用の工夫
    type: approach
    blocks:
    - image: /image/nissyo-form1.webp
      text:
        - 静的サイト構成のため、サーバー実装不要で導入できるFormspreeを採用しました。
        - HTML + JavaScriptのみで実装し、表示の軽さと運用のしやすさを意識しています。
    - image: /image/nissyo-form2.webp
      text:
        - また、誤送信を防ぐため、送信前に内容を確認できる画面を用意しました。

reflection:
  - 本制作では、microCMS や Formspree など初めて扱う技術を導入し、実際にサイトへ組み込み運用する方法を学びました。
  - また、クライアントの要望をもとに制作を進める中で、自分の作りたいものではなく「求められているもの」を形にすることの難しさを実感しました。
  - さらに、サイト管理者が更新・運用しやすい構成を考えることで、制作者視点だけでなく運用者視点を持つことの重要性も学びました。加えてアクセシビリティにも配慮し、誰にとっても使いやすいUIを設計・実装する大切さを改めて感じました。
  - 今後の制作でも、ユーザーだけでなく運用者や管理者の視点も意識したサイト制作を行っていきたいと考えています。
---