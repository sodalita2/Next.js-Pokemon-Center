import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.sass'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
        <Head>
            <title>Pokemon Center</title>
            <meta name="description" content="Detailed information about pokemons" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        
    </>


  )
}

export default Home
