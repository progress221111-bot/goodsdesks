# Goods Desk

英語圏向けの商品比較サイト（Astro 静的サイト）。

## ローカル開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的ファイルを出力
```

## 記事の追加

`src/content/articles/<slug>.md` を置くだけ。ファイル名がURLになる
（`toy-rotation-system.md` → `/articles/toy-rotation-system/`）。

```yaml
---
title: "記事タイトル"
description: "検索結果と一覧に出る要約"
category: kitchen        # kitchen | storage | cleaning | kids | desk | outdoor
type: guide              # guide=商品を売らない / roundup=比較 / review=単品
published: 2026-08-08
updated: 2026-09-01      # 任意
draft: false             # true にすると公開されない
---
```

`type` が `roundup` / `review` の記事は、本文冒頭にアフィリエイト開示が自動で挿入される。

## カテゴリの追加・公開

`src/data/site.ts` の `CATEGORIES` を編集する。`active: false` のカテゴリは
ナビとトップページに出ない（ページ自体は存在する）。記事が10本前後たまってから
`active: true` にする運用。

## デプロイ（Cloudflare Pages）

ビルドコマンド `npm run build` / 出力ディレクトリ `dist` / Node 22。

## 運用上の決めごと

- 使っていない商品を「使った」と書かない（About に明記した方法論と揃える）
- Amazon の価格・レビュー評価・商品画像は PA-API / SiteStripe 経由でのみ表示可。
  取得できるまでサイト上に価格を出さない
- 公開ペースは週3〜5本を上限の目安にする
