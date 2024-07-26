import Link from 'next/link';
import { FC } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Separator } from '@/components/ui/separator';
// import { Button } from '@/components/ui/button';
import { Header } from './header';
import { Footer } from './footer';

export const Top: FC = () => {
  return (
    <div className="flex flex-col min-h-dvh bg-green-100">
      <Header />
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
                  当院の特徴
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  自己紹介とか？
                  <br /> xxxxxxxxxxxxxxx
                  <br />
                  xxxxxxxxxxxxxxxx
                  <br />
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  <br />
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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
      <Footer />
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
