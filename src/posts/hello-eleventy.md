---
title: Hello Eleventy!
date: 2021-11-30
---
初めまして。ここでは当ブログのテーマや開発手法について、簡単に紹介します。

## 運営者

広瀬 彰太郎 ([@hirose_sh](https://www.twitter.com/hirose_sh))

職業はエンジニア。2021年11月現在、新潟市にあるデータ分析スタートアップに勤務しています。

## テーマ

技術面の勉強や実践、非技術書を含む読書に関するアウトプットが、ブログ運営の目的です。このため、プログラミングに関する覚え書きや読書メモが記事の主なテーマとなります。

## 開発手法

Jamstackと呼ばれるアーキテクチャを採用しています。

### 利用サービス

- 11ty (静的サイトジェネレーター)
- GitHub (ソースコード管理)
- Netlify (ホスティングサービス)

サイトのソースコードおよび投稿はすべてGitHubで管理しています。リポジトリのファイルから、本記事のタイトルに取った11ty/Eleventyを使ってあらかじめ静的HTMLを生成し、Netlifyにホスティングして配信する形としています。

リポジトリは公開しており、コミット履歴がそのままサイトの修正履歴となりますので、興味のある方はぜひ見てみてください。
[https://github.com/hirosesh/11ty](https://github.com/hirosesh/11ty)

### 開発言語

- JavaScript
- Nunjucks

11tyはReactなど特定のJavaScriptフレームワークに依存しておらず、通常のJavaScriptとテンプレートエンジン (ここではNunjucks) を使って開発します。
