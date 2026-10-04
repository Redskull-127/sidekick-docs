import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  // the top-nav links belong to the landing page; the sidebar has the tree
  const { links: _links, ...options } = baseOptions();
  return (
    <DocsLayout tree={source.getPageTree()} {...options}>
      {children}
    </DocsLayout>
  );
}
