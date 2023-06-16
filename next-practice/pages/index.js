import Head from 'next/head'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import MainPage from '@/src/Homepage/mainpage'
import Header from '@/src/header/header'
import Footer from '@/src/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ events_categories }) {
  console.log(events_categories)
  return (
    <>
      <Head>
        <title>Events App</title>
        <link rel='icon' href='/favicon.ico' ></link>
      </Head>
      <Header />
      <MainPage events_categories={events_categories} />
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const { events_categories, allEvents } = await import('../data/data.json')
  console.log(events_categories, allEvents)
  return {
    props: {
      events_categories: events_categories,
    }
  }
}

