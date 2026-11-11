export const site = {
  firmName: 'The Law Offices of Ilona Gorin',
  phoneDisplay: '(818) 446-8005',
  phoneHref: 'tel:+18184468005',
  email: 'ilona@gorinlawgroup.com',
  emailHref: 'mailto:ilona@gorinlawgroup.com',
  address: '16255 Ventura Blvd, Suite 1255, Encino, CA 91436',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=16255%20Ventura%20Blvd%2C%20Suite%201255%2C%20Encino%2C%20CA%2091436',
  productionOrigin: 'https://www.gorinlawgroup.com',
  preview: true,
} as const;

export const links = {
  contact: `${site.productionOrigin}/contact`,
  practiceAreas: `${site.productionOrigin}/legal-services`,
  personalInjury: `${site.productionOrigin}/services/personal-injury`,
  business: `${site.productionOrigin}/services/business-formation-and-transactions`,
  attorney: `${site.productionOrigin}/attorney/ilona-gorin`,
  blog: `${site.productionOrigin}/blog`,
  faq: `${site.productionOrigin}/faq`,
  injuryAttorneyArticle: `${site.productionOrigin}/case-study/when-should-you-hire-a-personal-injury-attorney-in-los-angeles`,
  slipAndFallArticle: `${site.productionOrigin}/case-study/five-things-to-do-after-a-slip-and-fall-accident-in-la`,
} as const;
