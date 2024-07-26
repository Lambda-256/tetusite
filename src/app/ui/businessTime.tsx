import Link from 'next/link';
import { FC } from 'react';

export const BusinessTime: FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              営業時間
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              9時～19時まで営業(19時から22時までは前日に相談)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
