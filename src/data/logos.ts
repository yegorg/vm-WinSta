import type { ImageMetadata } from 'astro';

// Import your logo images
// Replace these imports with your actual logo files
import logo1 from '../assets/images/logos/jack.png';
import logo2 from '../assets/images/logos/kontik.png';
import logo3 from '../assets/images/logos/lily.png';
import logo4 from '../assets/images/logos/timi.png';
import logo5 from '../assets/images/logos/bonjour.png';

export interface Logo {
  src: ImageMetadata;
  alt: string; // The partner company's name
}

export interface LogoList {
  id: string;
  logos: Logo[];
}

// Example logo lists with imported images
export const logoLists: Record<string, LogoList> = {
  main: {
    id: 'main',
    logos: [
      {
        src: logo1,
        alt: 'Jack',
      },
      {
        src: logo2,
        alt: 'Kontik',
      },
      {
        src: logo3,
        alt: 'Golden Lily',
      },
      {
        src: logo4,
        alt: 'Timi',
      },
      {
        src: logo5,
        alt: 'Bonjour',
      },
    ],
  },
};
