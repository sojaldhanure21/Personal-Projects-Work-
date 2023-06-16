import Footer from "@/src/footer/footer";
import Header from "@/src/header/header";
import MainLayout from "@/src/layout/main-layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (<>
    <Head>metad...</Head>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </>
  )

}