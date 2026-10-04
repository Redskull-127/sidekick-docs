import { generateOGImage } from 'fumadocs-ui/og';
import { appName } from '@/lib/shared';

export const revalidate = false;
export const alt = 'Sidekick: persona agents you can talk to inside Claude Code';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return generateOGImage({
    title: 'Give Claude Code a voice. Then talk to it.',
    description: 'Persona agents you can talk to, hands-free, inside Claude Code. Open source, macOS.',
    site: appName,
  });
}
