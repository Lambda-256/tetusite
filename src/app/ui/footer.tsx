import Link from 'next/link';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted">
      <p className="text-xs text-muted-foreground">
        &copy; 2024{' '}
        <Link
          href="https://x.com/fromA_JP"
          className="text-xs hover:underline underline-offset-4 text-muted-foreground"
        >
          FromAgent
        </Link>
        . All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="https://www.instagram.com/hogushi_kaba/?igsh=dDM0MnR2MGtmbzJn&utm_source=qr"
          className="text-xs hover:underline underline-offset-4 text-muted-foreground"
          prefetch={false}
        >
          Instagram
        </Link>
        <Link
          href="https://line.me/R/ti/p/@261yelbv?ts=06301001&oat_content=url"
          className="text-xs hover:underline underline-offset-4 text-muted-foreground"
          prefetch={false}
        >
          LINE
        </Link>
        <Link
          href="https://www.ekiten.jp/shop_74259373/"
          className="text-xs hover:underline underline-offset-4 text-muted-foreground"
          prefetch={false}
        >
          ekiten
        </Link>
      </nav>
    </footer>
  );
};
