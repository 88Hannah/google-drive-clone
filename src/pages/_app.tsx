import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { SessionProvider } from "next-auth/react"
import Layout from "@/components/Layout"

import "@/styles/globals.css";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={GeistSans.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </SessionProvider>
  );
};

export default MyApp;
