import Link from 'next/link';
import { ArrowRight, AudioLines, Ear, MessageCircleQuestion, Users } from 'lucide-react';
import { CopyCommand } from '@/components/copy-command';
import { pluginRepoUrl } from '@/lib/shared';

const INSTALL = 'claude plugin marketplace add Redskull-127/sidekick && claude plugin install sidekick@meer-mods';

const features = [
  {
    icon: Users,
    title: 'Personas, in one line',
    body: '“/sidekick new Rudy, a blunt senior Rust dev” becomes a character with a voice, a catchphrase and a way of working. Two ship so it works before you create anyone.',
  },
  {
    icon: Ear,
    title: 'Hands-free, truly',
    body: 'Talk. It listens until you pause, works, speaks a short answer, and listens again. No key to hold. Talk over it to interrupt. Say “stop” to cancel a turn.',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Questions, answered aloud',
    body: 'When it needs a decision it reads the options out loud and takes “the second one”, “production” or a free-text answer. The dialog is the fallback.',
  },
  {
    icon: AudioLines,
    title: 'Apple voices, your Mac',
    body: 'Speech runs on macOS. Recognition is on-device where the language model is installed. Nothing is sent to anyone but Claude, through your own account.',
  },
];

const transcript = [
  { who: 'chime', text: '♪' },
  { who: 'you', text: 'the tests on the auth module are flaky, find out why' },
  { who: 'rudy', text: 'Found it. The mock clock leaks between two tests; one fix in the setup file.' },
  { who: 'chime', text: '♪' },
  { who: 'you', text: 'ship it' },
  { who: 'rudy', text: 'Shipped. Forty-one tests, all green.' },
];

const loop = [
  ['Listen', 'The microphone opens. Your words appear in the band as they are recognized.'],
  ['Send', 'When you pause, what you said becomes your prompt. Nothing is added.'],
  ['Speak', 'The reply is read aloud in the sidekick’s voice, a sentence or two.'],
  ['Chime', 'One soft note: your turn. Talk over the voice at any time to interrupt.'],
];

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="sk-grain border-b border-fd-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-3 py-1 text-xs font-medium text-fd-muted-foreground">
              <span aria-hidden className="sk-breathe inline-block size-2 rounded-full bg-[var(--sk-gold)]" />A mod for Claude Code
              · macOS
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Give Claude Code a voice.
              <br />
              <span className="text-[var(--sk-gold-deep)] dark:text-[var(--sk-gold)]">Then talk to it.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg text-fd-muted-foreground">
              Sidekick turns your session over to a persona you describe in a sentence. It explains, does and fixes in
              character, asks the moment it needs you, and speaks its replies. Say something back; it is listening.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-fd-primary px-5 py-3 text-sm font-semibold text-fd-primary-foreground transition hover:opacity-90"
              >
                Read the docs <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/docs/quickstart"
                className="inline-flex items-center justify-center rounded-xl border border-fd-border bg-fd-card px-5 py-3 text-sm font-semibold transition hover:bg-fd-accent"
              >
                Two-minute quickstart
              </Link>
            </div>
            <div className="mt-6 max-w-xl">
              <CopyCommand command={INSTALL} />
            </div>
          </div>

          <div className="rounded-2xl border border-fd-border bg-[var(--sk-ink)] p-5 text-sm text-[var(--sk-cream)] shadow-2xl shadow-black/20">
            <div className="mb-4 flex items-center justify-between text-xs text-[var(--sk-cream)]/50">
              <span className="font-mono">claude · talk mode</span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="sk-breathe inline-block size-2 rounded-full bg-[var(--sk-gold)]" />
                listening
              </span>
            </div>
            <ol className="space-y-3 font-mono">
              {transcript.map((line, i) => {
                if (line.who === 'chime') {
                  return (
                    <li key={i} className="text-xs text-[var(--sk-gold)]/80">
                      {line.text} <span className="text-[var(--sk-cream)]/40">your turn</span>
                    </li>
                  );
                }
                if (line.who === 'you') {
                  return (
                    <li key={i} className="text-[var(--sk-cream)]/85">
                      <span className="text-[var(--sk-cream)]/40">you · </span>
                      {line.text}
                    </li>
                  );
                }
                return (
                  <li key={i} className="rounded-lg border border-[var(--sk-gold)]/25 bg-[var(--sk-ink-2)] p-3">
                    <div className="mb-1 text-xs font-semibold text-[var(--sk-gold)]">🦊 Rudy</div>
                    <div>{line.text}</div>
                  </li>
                );
              })}
            </ol>
            <div className="mt-4 border-t border-[var(--sk-cream)]/10 pt-3 text-xs text-[var(--sk-cream)]/50">
              🎙 listening… <span className="text-[var(--sk-cream)]/35">s skip · m mute · x end talk</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-fd-border bg-fd-card p-6">
              <f.icon className="size-5 text-[var(--sk-gold-deep)] dark:text-[var(--sk-gold)]" />
              <h2 className="mt-4 text-lg font-semibold tracking-tight">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-fd-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-fd-border bg-fd-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">One loop, no keys</h2>
          <p className="mt-2 max-w-2xl text-fd-muted-foreground">
            Talk mode is a conversation, not a dictation feature. Each step hands off to the next by itself.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {loop.map(([title, body], i) => (
              <li key={title} className="rounded-2xl border border-fd-border bg-fd-background p-5">
                <span className="font-mono text-xs text-fd-muted-foreground">0{i + 1}</span>
                <h3 className="mt-2 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-fd-muted-foreground">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-fd-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Sidekick is open source, MIT. Built as a Claude Code mod.</p>
        <nav className="flex gap-5">
          <Link href="/docs" className="hover:text-fd-foreground">
            Docs
          </Link>
          <Link href="/docs/privacy" className="hover:text-fd-foreground">
            What it runs and sends
          </Link>
          <a href={pluginRepoUrl} className="hover:text-fd-foreground" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </footer>
    </main>
  );
}
