# 運用ポリシー（記事を書く前に必ず確認する）

このサイトはアフィリエイト収益を得るため、Amazonアソシエイト規約・FTCの推奨表示規則・
Googleのスパムポリシーの3つに同時に従う必要がある。記事生成もこの制約の中で行う。

チェックは自動化してある。公開前に必ず実行すること:

```bash
cd C:\Users\ryopc\threads_posts && python check_articles.py
```

---

## 1. Amazonの商品情報は表示しない

**価格・レビュー評価・レビュー件数・商品画像を記事に載せてはいけない。**

Amazonアソシエイト規約では、これらの「Product Advertising Content」は
PA-API または SiteStripe 経由で取得したものしか表示できない。本システムは
スクレイピングで取得しているため、表示は規約違反にあたる。

| 書いてよい | 書いてはいけない |
|---|---|
| 商品名・リンク | `$29.99` / `3,980円` |
| 素材・寸法・容量・保証内容 | `★4.7` / `4.5 out of 5 stars` |
| 「このサイズ帯では」といった一般論 | `(744 reviews)` / `レビュー1,234件` |
| | Amazonの商品画像（`m.media-amazon.com` 等） |

評価やレビュー件数は**商品選定の内部判断にのみ使う**。読者には見せない。

PA-APIは売上3件を達成すると使えるようになるので、取得できたらこの制限は緩められる。

**楽天は例外**: 楽天は公式API（`openapi.rakuten.co.jp`）から取得しているため、
価格・評価の表示は問題ない。Threadsの楽天アカウントは現状のままでよい。

## 2. 使っていない商品を「使った」と書かない

FTCの推奨表示規則は、実際には行っていない使用・検証をあったかのように書くことを
欺瞞的表示として禁じている。アフィリエイトサイトは実際に指導対象になっている。

このサイトは日本から運営しており、米国の商品を実機テストできない。
したがって **編集チームとして「調査・比較した」立場で書く**。

| 書いてよい | 書いてはいけない |
|---|---|
| We compared 40 storage bins by published capacity. | I tested this for three months. |
| Across 4,200 reviews, 23% mention a cracked hinge. | In our testing, the lid cracked. |
| The manufacturer lists a lifetime warranty. | My kids have used this every day. |
| Reviewers consistently report that... | After six months of use... |

この方針は About ページに明記済み（"based on research and comparison rather than
long-term hands-on testing"）。記事の書き方がここから外れると、サイト全体の
信頼性の主張と矛盾する。

## 3. 開示表記

- 全ページのフッターに常時表示（実装済み）
- `type: roundup` / `review` の記事は本文冒頭にも開示ボックスが自動表示される
- **商品リンクを含む記事に `type: guide` を指定してはいけない**（開示が出ないため）。
  自動チェックで検出される

## 4. Googleのスパムポリシー対策

「AIで書いたか」ではなく「独自の価値があるか」が判定基準。以下を守る。

- **公開ペースは週3〜5本を上限の目安にする**。1日に何本も公開しない
- **比較記事には必ず自前のデータを1つ以上含める**
  （レビュー分析の集計、価格履歴、規格の正規化比較など）
- 全記事が同じ見出し構成にならないようにする
- 3か月ごとに内容を見直し、`updated` を更新する

## 5. 記事タイプの使い分け

| type | 用途 | 開示 | 商品リンク |
|---|---|---|---|
| `guide` | 商品を売らない実用記事。サイトの土台 | なし | 入れない |
| `roundup` | 複数商品の比較。収益の主力 | あり | あり |
| `review` | 単品の深掘り | あり | あり |

立ち上げ期は `guide` を7割にする。開設直後に比較記事ばかり量産すると、
Googleのscaled content abuseの判定を受けやすい。
