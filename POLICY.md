# 運用ポリシー（記事を書く前に必ず確認する）

このサイトとThreadsアカウントは、Amazonアソシエイト規約・FTCの推奨表示規則・
Googleのスパムポリシーに同時に従う必要がある。違反はアカウント停止に直結するため、
判断に迷ったら「やらない」側に倒す。

チェックは自動化してある。公開前に必ず実行すること:

```bash
cd C:\Users\ryopc\threads_posts && python check_articles.py
```

Threadsの投稿は生成時に `modules/affiliate_policy.py` が自動で検査し、
違反があれば投稿自体を中止する（`check_amazon_post`）。

---

## 1. Amazonの商品情報は表示しない

**価格・レビュー評価・レビュー件数・商品画像・ランキング表記を出してはいけない。**

Operating Agreement では、これらの Product Advertising Content は
**PA-API / Creators API / SiteStripe 経由で取得したものしか表示できない**。
本システムはスクレイピング取得のため、表示すれば規約違反になる。

| 書いてよい | 書いてはいけない |
|---|---|
| 商品名・タグ付きリンク | `$29.99` / `2,628円` |
| 素材・寸法・容量・保証内容 | `★4.3` / `4.5 out of 5 stars` |
| 「このサイズ帯では」といった一般論 | `(6,686 reviews)` / `レビュー6,686件` |
| メーカーが公表している仕様 | Amazonの商品画像（`m.media-amazon.com` 等） |
| | 「ベストセラー」「Amazon売れ筋1位」 |

評価やレビュー件数は**商品選定の内部判断にのみ使う**。読者には見せない。

仮に価格を表示する場合（PA-API取得後）は、取得時刻のタイムスタンプと
「価格・在庫は変動する」旨の注記が別途必須になる。

**楽天は例外**: 公式API（`openapi.rakuten.co.jp`）から取得しているため、
価格・評価の表示は問題ない。Threadsの楽天アカウントは現状のままでよい。

## 2. 開示文言は原文どおりに入れる

Operating Agreement §5 が要求する文言:

> As an Amazon Associate I earn from qualifying purchases.

- **サイト**: 全ページのフッターに常時表示（実装済み）。比較・レビュー記事は本文冒頭にも表示
- **Threads（英語）**: リンクを含むコメントに `#ad — <上記文言>` を入れる
- **Threads（日本語）**: `#PR（Amazonアソシエイト参加中）`（景表法のステマ規制にも対応）

「we earn」など主語を変えた表現は使わない。原文どおりが最も安全。

## 3. リンクは改変しない

- **短縮URL（bit.ly 等）を使わない**。リンクのクローキング禁止に抵触する
- **リダイレクトを挟まない**。挟むと Disqualified Purchases（成果無効）になる
- Amazonへのリンクには**必ずアソシエイトタグを付ける**
  （サイト: `goodsdesk-20` 相当、Threads米国: `momspick1-20`、Threads日本: `wagokoro8-22`）
- リンク先URLを隠す・偽装する行為は禁止

## 4. リンクを置いてはいけない場所

- メール、SMS、DM、メールマガジン、添付ファイル
- PDF、電子書籍、印刷物、その他オフライン資料
- Amazon内部（カスタマーレビュー、Q&A、ほしい物リスト等）
- ポップアップ／ポップアンダー広告
- Amazonのページを自サイト内にフレーム表示する形（WebView含む）

現在の運用（Threads投稿の返信、サイト記事本文）はいずれも問題ない。

## 5. 使っていない商品を「使った」と書かない

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

この方針は About ページに明記済み。記事の書き方がここから外れると、
サイト全体の信頼性の主張と矛盾する。

## 6. Amazonの商標を誤用しない

- ドメイン名・アカウント名・サブドメインに `amazon` やその変形・誤記を含めない
- 「Amazon公式」「Amazonが推奨」など、Amazonの推奨・提携と誤認させる表現を使わない
- Amazonのロゴを改変して使わない

## 7. 対象読者

- 13歳未満の子どもに向けたサイトにしない（COPPA）
- 子どもから個人情報を収集しない

現在の読者設定（米国の成人）は問題ない。Privacy Policy にも明記済み。

## 8. オリジナリティ（Amazon規約とGoogle両方の要求）

Amazon規約は、Program Content の再配布を禁じ、**独自の解説・分析・変換**を求めている。
Googleのスパムポリシー（scaled content abuse）も同じ方向の要求。

- **比較記事には必ず自前のデータを1つ以上含める**
  （レビュー分析の集計、価格履歴、規格の正規化比較など）
- 商品説明文をそのまま引き写さない
- **公開ペースは週3〜5本を上限の目安にする**
- 全記事が同じ見出し構成にならないようにする
- 3か月ごとに内容を見直し、`updated` を更新する

## 9. 記事タイプの使い分け

| type | 用途 | 開示 | 商品リンク |
|---|---|---|---|
| `guide` | 商品を売らない実用記事。サイトの土台 | なし | 入れない |
| `roundup` | 複数商品の比較。収益の主力 | あり | あり |
| `review` | 単品の深掘り | あり | あり |

立ち上げ期は `guide` を7割にする。

## 10. アカウント側の義務

- **収益が発生するすべてのサイト・SNSをアソシエイトのサイト一覧に登録する**
  （登録済み: goodsdesk.com、Threads各アカウント）
- 米国アソシエイトは**申請から180日以内に3件の売上**が必要（期限: 2027年1月末）
- 税務情報を最新に保つ（提出済み: 米国 W-8BEN、カナダ）
