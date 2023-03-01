import Head from 'next/head'
import Image from 'next/image'
import { Blinker } from "next/font/google"
import localFont from "next/font/local"
import styles from '@/styles/Home.module.css'

const blinker = Blinker({ subsets: ['latin'], weight: ['400'] })
const blanka = localFont({
  src: [
    {
      path: '../../public/fonts/blanka-regular-webfont.woff2',
      weight: '400',
    }
  ],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>UNDECIPHERED Clothing | Streetwear MNL PH</title>
        <meta name="description" content="A streetwear brand in MNL PH" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="https://shopee.ph/undecipheredclothing"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order from our Shopee 🛸
            </a>
          </div>

          <div>
            <span>
              A streetwear brand in Manila, Philippines
            </span>
          </div>
          <div>
            <a
              href="https://www.facebook.com/UndecipheredClothing/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow us on Facebook 👻
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/undeciphered-clothing-logo.png"
            alt="Undeciphered Clothing Logo"
            width={500}
            height={140}
            priority
          />
          <Image
            className={styles.logoMobile}
            src="/undeciphered-clothing-logo-square.png"
            alt="Undeciphered Clothing Logo"
            width={300}
            height={300}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://shopee.ph/undecipheredclothing?shopCollection=244704110"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={blanka.className}>
              CYBERPUNK
            </h2>
            <p className={blinker.className}>
              Wear something Gibsonesque 🦾 <br /> Designs out now!
            </p>
          </a>

          <a
            href="https://shopee.ph/undecipheredclothing"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={blanka.className}>
              IMPACT THREADS
            </h2>
            <p className={blinker.className}>
              Support a cause for every purchase 🤍 <br /> Coming Soon!
            </p>
          </a>

          <a
            href="https://shopee.ph/undecipheredclothing"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={blanka.className}>
              MANIFESTO
            </h2>
            <p className={blinker.className}>
              Speak without saying a word 😌 <br /> Coming Soon!
            </p>
          </a>

          <a
            href="https://shopee.ph/undecipheredclothing"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={blanka.className}>
              DARK MODE
            </h2>
            <p className={blinker.className}>
              Because light attracts bugs 👩‍💻 <br /> Coming Soon!
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
