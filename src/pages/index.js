import Head from 'next/head'
import { Blinker } from "next/font/google"
import localFont from "next/font/local"
import styles from 'styles/Home.module.css'
import {ImgixProvider} from "components/ImgixProvider";
import {ImgixImage} from "components/ImgixImage";

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
        <meta name="description" content="A streetwear brand in Manila, Philippines" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://undeciphered.ph" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="UNDECIPHERED Clothing | Streetwear MNL PH" />
        <meta name="twitter:card" content="A streetwear brand in Manila, Philippines" />
        <meta
          property="og:description"
          content="A streetwear brand in Manila, Philippines"
        />
        <meta property="og:image" content='/site-preview.png' />
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
          <ImgixProvider>
            <ImgixImage
              className={styles.logo}
              src="/undeciphered-clothing-logo.png"
              alt="Undeciphered Clothing Logo"
              width={500}
              height={140}
              priority
            />
            <ImgixImage
              className={styles.logoMobile}
              src="/undeciphered-clothing-logo-square.png"
              alt="Undeciphered Clothing Logo"
              width={300}
              height={300}
              priority
            />
          </ImgixProvider>
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
              Wear something Gibsonesque 🦾 <br />
              10 designs to choose from!
            </p>
          </a>

          <a
            href="https://shopee.ph/undecipheredclothing?shopCollection=244850338"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={blanka.className}>
              IMPACT THREADS
            </h2>
            <p className={blinker.className}>
              Support a cause for every purchase 🤍 <br />
              Designs out now!
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
              Speak without saying a word 😌 <br />
              Coming Soon!
            </p>
          </a>

          <a
            href="https://shopee.ph/undecipheredclothing?shopCollection=244882766"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={blanka.className}>
              DARK MODE
            </h2>
            <p className={blinker.className}>
              Because light attracts bugs 👩‍💻 <br />
              Collect all 10 designs!
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
