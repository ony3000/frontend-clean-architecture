import Head from 'next/head';

import { Header } from '@/ui/Header';
import { User } from '@/ui/User';

export default function UserPage() {
  return (
    <>
      <Head>
        <title>Frontend Clean Architecture</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div
        className="flex min-h-screen flex-col gap-8 px-5 py-8 sm:gap-16 sm:px-12 sm:py-16 lg:gap-24
          lg:px-20 lg:py-24"
      >
        <Header />
        <User />
      </div>
    </>
  );
}