import type { CollectionEntry } from 'astro:content';

type Article = CollectionEntry<'articles'>;

const STOPWORDS = new Set(
  'about actually after before from have just keep long many more most much only other over same some than that their them then they this those when where which while whether with without your'.split(' ')
);

const words = (a: Article) =>
  new Set(
    `${a.data.title} ${a.data.description}`
      .toLowerCase()
      .match(/[a-z]{4,}/g)
      ?.map((w) => w.replace(/s$/, ''))
      .filter((w) => !STOPWORDS.has(w)) ?? []
  );

// 同カテゴリで公開日が前後の2本（循環）と、カテゴリを問わず話題が近い2本を選ぶ。
// 前後の記事を必ず含めることで、全記事が2本以上の被リンクを持ち、新着にも古い記事からリンクされる。
export function relatedArticles(entry: Article, all: Article[], count = 4): Article[] {
  const siblings = all
    .filter((a) => a.data.category === entry.data.category)
    .sort((a, b) => a.data.published.valueOf() - b.data.published.valueOf() || a.id.localeCompare(b.id));
  const i = siblings.findIndex((a) => a.id === entry.id);
  const picked = new Map<string, Article>();
  for (const a of [siblings[(i + 1) % siblings.length], siblings[(i - 1 + siblings.length) % siblings.length]]) {
    if (a.id !== entry.id) picked.set(a.id, a);
  }

  const mine = words(entry);
  const byTopic = all
    .filter((a) => a.id !== entry.id && !picked.has(a.id))
    .map((a) => ({ a, score: [...words(a)].filter((w) => mine.has(w)).length }))
    .sort((x, y) => y.score - x.score || x.a.id.localeCompare(y.a.id));
  for (const { a } of byTopic) {
    if (picked.size >= count) break;
    picked.set(a.id, a);
  }
  return [...picked.values()];
}
