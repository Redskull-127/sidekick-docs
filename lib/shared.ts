import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Sidekick';
export const siteUrl = 'https://sidekick.meertarbani.in';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

/** This docs site. */
export const gitConfig = {
  user: 'Redskull-127',
  repo: 'sidekick-docs',
  branch: 'main',
};

/** The plugin itself. */
export const pluginRepoUrl = 'https://github.com/Redskull-127/sidekick';

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
