interface Category {
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: 'TRUFFLE CANDY',
    slug: 'truffle',
    description: 'TRUFFLE CANDY',
  },
  {
    name: 'TOFFEE CANDY',
    slug: 'toffee',
    description: 'TOFFEE CANDY',
  },
  {
    name: 'DARČEKOVÁ KRABIČKA',
    slug: 'krabiska',
    description: 'DARČEKOVÁ KRABIČKA',
  },
  {
    name: 'KOMBINOVANÉ CANDY',
    slug: 'candy',
    description: 'KOMBINOVANÉ CANDY',
  },
  {
    name: 'FONDANTOVÉ CANDY',
    slug: 'fondantove',
    description: 'FONDANTOVÉ CANDY',
  },
  {
    name: 'WAFER CANDY',
    slug: 'wafer',
    description: 'WAFER CANDY',
  },
  {
    name: 'DEZERT',
    slug: 'dezert',
    description: 'DEZERT',
  },
  {
    name: 'SENDVIČOVÉ SUŠIENKY',
    slug: 'sendvic',
    description: 'SENDVIČOVÉ SUŠIENKY',
  },
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
