import Link from 'next/link';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-background">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        Icon
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href={'/menu'}
          className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground text-black"
          prefetch={false}
        >
          施術メニュー
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground text-black"
          prefetch={false}
        >
          予約方法
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground text-black"
          prefetch={false}
        >
          カッサとは
        </Link>

        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4 text-primary-foreground text-black"
          prefetch={false}
        >
          アクセス
        </Link>
      </nav>
    </header>
  );
};
