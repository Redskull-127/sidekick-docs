import { appName, pluginRepoUrl, siteUrl } from '@/lib/shared';

/** One <script type="application/ld+json"> with the given graph. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export const author = { '@type': 'Person', name: 'Meer Tarbani', url: 'https://meertarbani.in' };

export const website = {
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: appName,
  description: 'Persona agents you can talk to inside Claude Code.',
  publisher: author,
};

export const software = {
  '@type': 'SoftwareApplication',
  '@id': `${siteUrl}/#software`,
  name: appName,
  description:
    'A Claude Code mod. Describe a persona in one sentence and it drives your session: explains, does and fixes in character, asks when it needs you, speaks its replies, and listens hands-free.',
  url: siteUrl,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'macOS',
  softwareRequirements: 'Claude Code 2.1.287 or later',
  license: 'https://opensource.org/license/mit',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  downloadUrl: pluginRepoUrl,
  codeRepository: pluginRepoUrl,
  softwareHelp: { '@type': 'CreativeWork', url: `${siteUrl}/docs` },
  author,
  image: `${siteUrl}/opengraph-image`,
};

export function techArticle(page: { url: string; title: string; description?: string; image: string }) {
  return {
    '@type': 'TechArticle',
    headline: page.title,
    description: page.description,
    url: `${siteUrl}${page.url}`,
    image: `${siteUrl}${page.image}`,
    inLanguage: 'en',
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#software` },
    author,
  };
}

export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: `${siteUrl}${item.url}` })),
  };
}
