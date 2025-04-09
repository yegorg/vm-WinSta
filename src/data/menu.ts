// src/data/menu.ts

export const headerMenu = [
  { name: 'Catalogue', link: '/blog' },
  { name: 'Brands', link: '/team' },
  { name: 'Services', link: '/blog' },
  {
    name: 'About Us',
    link: '/style-guide',
    showArrow: false,
    children: [
      { name: 'Typography', link: '/style-guide#typography' },
      { name: 'Colors', link: '/style-guide#colors' },
      { name: 'Links', link: '/style-guide#links' },
      { name: 'Buttons', link: '/style-guide#buttons' },
      { name: 'Forms', link: '/style-guide#forms' },
      { name: 'Lists', link: '/style-guide#lists' },
    ],
  },
];

export const footerMenu = [
  { name: 'Facebook', link: '/style-guide' },
  { name: 'X', link: '/style-guide' },
  { name: 'Instagram', link: '/style-guide' },
];

export const legalMenu = [
  { name: 'Privacy Policy', link: '/legal/privacy-policy' },
  { name: 'Terms of Service', link: '/legal/terms-of-service' },
];
