import Link from 'next/link';
import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Separator } from '@/components/ui/separator';
// import { Button } from '@/components/ui/button';

export const Top: FC = () => {
  return (
    <div className="flex flex-col min-h-dvh bg-green-100">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-background">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          Icon
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
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
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                {/* <img
                  src="/placeholder.svg"
                  width="400"
                  height="400"
                  alt="Founder"
                  className="mx-auto rounded-full w-40 h-40 object-cover"
                /> */}
                画像あればここに表示
                <h1 className="mt-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  もみほぐしかば
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="services">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  施術メニュー
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  いくつかのパターンで施術させていただきます。予約の参考にしていただければと思います。
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card className="p-6 bg-background shadow-sm border rounded-lg">
                <CardHeader>
                  <CardTitle>60分 もみほぐし+カッサ+ストレッチ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    60分の間にもみほぐしと気になる所にカッサと体全体の筋肉を伸ばすストレッチの方を行っていきます。
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 bg-background shadow-sm border rounded-lg">
                <CardHeader>
                  <CardTitle>60分 もみほぐし+カッサ＋ストレッチ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    簡易的なベッドを持って家にお伺いし、６０分の間にもみほぐしと気になる所にカッサ、体全体の筋肉を伸ばすストレッチの方を行っていきます。
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 bg-background shadow-sm border rounded-lg">
                <CardHeader>
                  <CardTitle>45分のもみほぐし+カッサ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    疲れている身体を回復させてあげるのにぴったりです！
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6 bg-background shadow-sm border rounded-lg">
                <CardHeader>
                  <CardTitle>30分のもみほぐし</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    もみほぐしのみのメニューとなります。もみほぐし自体が初めてな方はぴったりなメニューとなっております。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
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
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 FromAgent. All rights reserved.
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
    </div>
  );
};

// const MountainIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
//   <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//   </svg>
// );
