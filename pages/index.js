import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>

        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam libero dolorem voluptatum at accusantium? Optio maxime explicabo dicta dolor ducimus vel expedita error maiores, ullam nam aperiam, quasi molestias modi.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam libero dolorem voluptatum at accusantium? Optio maxime explicabo dicta dolor ducimus vel expedita error maiores, ullam nam aperiam, quasi molestias modi.</p>
        <Link className={styles.btn} href="/ninjas">ninjas</Link>

      </div>
    </>
  )
}
