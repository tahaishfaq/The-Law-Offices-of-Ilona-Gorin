export interface Testimonial {
  quote: string;
  summary?: boolean;
  name: string;
  sourceUrl: string;
  sourceLabel: string;
}

// TODO: Replace excerpts with the firm's preferred client-approved reviews when supplied.
export const testimonials: Testimonial[] = [
  {
    quote: 'This firm is amazing they are beyond caring and have amazing communication.',
    name: 'Crystal Villanueva',
    sourceUrl: 'https://reviews.birdeye.com/ilona-gorin-law-offices-166832605787343',
    sourceLabel: 'Google review excerpt via Birdeye',
  },
  {
    quote: 'They took great care of me and kept me updated…',
    name: 'Ibrahim Traore',
    sourceUrl: 'https://reviews.birdeye.com/ilona-gorin-law-offices-166832605787343',
    sourceLabel: 'Google review excerpt via Birdeye',
  },
  {
    quote: 'They were quick to respond and always kept me updated throughout the process.',
    name: 'JayJay Luengingkasut',
    sourceUrl: 'https://www.lawyer.com/firm/law-offices-of-ilona-gorin.html',
    sourceLabel: 'Google review excerpt via Lawyer.com',
  },
  {
    quote: 'Maria appreciated Edith’s explanations, regular updates, and careful handling of her case.',
    name: 'Maria Sucilla', summary: true,
    sourceUrl: 'https://reviews.birdeye.com/ilona-gorin-law-offices-166832605787343',
    sourceLabel: 'Google review summary via Birdeye',
  },
  {
    quote: 'Jose praised the team’s support after a car accident, including help with medical care and his claim.',
    name: 'Jose Pineda', summary: true,
    sourceUrl: 'https://reviews.birdeye.com/ilona-gorin-law-offices-166832605787343',
    sourceLabel: 'Google review summary via Birdeye',
  },
  {
    quote: 'Jay143 valued the office’s patience, understanding, and compassion during a motor vehicle accident claim.',
    name: 'Jay143', summary: true,
    sourceUrl: 'https://reviews.birdeye.com/ilona-gorin-law-offices-166832605787343',
    sourceLabel: 'Google review summary via Birdeye',
  },
  {
    quote: 'Ryan recommended the firm for its professional and friendly help with his cases.',
    name: 'Ryan Corruth', summary: true,
    sourceUrl: 'https://www.lawyer.com/firm/law-offices-of-ilona-gorin.html',
    sourceLabel: 'Google review summary via Lawyer.com',
  },
  {
    quote: 'Hunter recommended the office and described the staff as professional and helpful.',
    name: 'Hunter Horowitz', summary: true,
    sourceUrl: 'https://www.lawyer.com/firm/law-offices-of-ilona-gorin.html',
    sourceLabel: 'Google review summary via Lawyer.com',
  },
];
