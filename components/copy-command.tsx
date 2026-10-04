'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

/** A one-line shell command with a copy button, for the landing page. */
export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard blocked: the text is still selectable
    }
  }

  return (
    <div className="flex items-center gap-3 rounded-xl border border-fd-border bg-fd-card px-4 py-3 font-mono text-sm">
      <span aria-hidden className="select-none text-fd-muted-foreground">
        $
      </span>
      <code className="flex-1 overflow-x-auto whitespace-nowrap text-fd-foreground">{command}</code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Copied' : 'Copy command'}
        className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-fd-muted-foreground transition hover:bg-fd-accent hover:text-fd-foreground"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>
    </div>
  );
}
