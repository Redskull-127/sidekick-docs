import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { pluginRepoUrl } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-semibold tracking-tight">
          <span
            aria-hidden
            className="inline-flex size-6 items-center justify-center rounded-md bg-[var(--sk-gold)] text-[var(--sk-ink)]"
          >
            <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M6 11a6 6 0 0 0 12 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 17v3M9 20h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          Sidekick
        </span>
      ),
      transparentMode: 'top',
    },
    links: [
      { text: 'Docs', url: '/docs', active: 'nested-url' },
      { text: 'Talk mode', url: '/docs/talk-mode' },
      { text: 'Commands', url: '/docs/commands' },
    ],
    githubUrl: pluginRepoUrl,
  };
}
