// サイト全体の設定。カテゴリはここに足すだけで一覧・ナビ・記事の検証に反映される。
export const SITE = {
  name: 'Goods Desk',
  url: 'https://goodsdesk.com',
  tagline: 'We compare everyday products so you can stop guessing.',
  description:
    'Goods Desk researches and compares everyday products — kitchen, storage, cleaning, ' +
    'kids gear and more — and explains which one fits which situation, and why.',
  // アフィリエイト開示（FTC規則とAmazonアソシエイト規約で全ページ必須）
  disclosureShort:
    'Goods Desk is reader-supported. We earn commission from qualifying purchases made ' +
    'through links on this site, at no extra cost to you.',
  // Associates Program Operating Agreement §5 が要求する文言。原文どおりに保つこと
  amazonDisclosure: 'As an Amazon Associate I earn from qualifying purchases.',
  contactEmail: 'hello@goodsdesk.com',
};

export type CategoryId =
  | 'kitchen'
  | 'storage'
  | 'cleaning'
  | 'kids'
  | 'desk'
  | 'outdoor';

export const CATEGORIES: {
  id: CategoryId;
  name: string;
  blurb: string;
  active: boolean;
}[] = [
  {
    id: 'kitchen',
    name: 'Kitchen',
    blurb: 'Cookware, prep tools and the small things that make weeknight dinners shorter.',
    active: true,
  },
  {
    id: 'storage',
    name: 'Storage & Organization',
    blurb: 'Bins, shelves and systems for homes that ran out of room a while ago.',
    active: true,
  },
  {
    id: 'cleaning',
    name: 'Cleaning & Laundry',
    blurb: 'What actually removes the stain, and what just smells like it did.',
    active: false,
  },
  {
    id: 'kids',
    name: 'Kids & Family',
    blurb: 'Gear that survives a toddler, and school-year logistics.',
    active: false,
  },
  {
    id: 'desk',
    name: 'Desk & Home Office',
    blurb: 'Working from the kitchen table, and how to make that less painful.',
    active: false,
  },
  {
    id: 'outdoor',
    name: 'Outdoor & Seasonal',
    blurb: 'Yard, patio, and the stuff you only think about twice a year.',
    active: false,
  },
];

export const activeCategories = () => CATEGORIES.filter((c) => c.active);
export const categoryById = (id: string) => CATEGORIES.find((c) => c.id === id);
