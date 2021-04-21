import Head from "next/head";
import Link from "next/link";

import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";

import Footer from "./footer";

const name = "Saakshaat Singh";
export const siteTitle = "**Saakshaat** Singh";

export function GeneralPageLayout({ home, children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title : name}</title>
        <meta name="og:title" content={title ? title : name} />
      </Head>
      <div className={styles.container}>
        {home ? (
          <>
            <div>{children}</div>
          </>
        ) : (
          <>
            <div>
              {children}
              <Link href="/">
                <a className={styles.backToHome}>Back to Home</a>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export function GlobalLayout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Software Engineer. Leader. Bumblebee Enthusiast. Like building software? Like using software? Like pink? Check this out."
        />
        <meta
          name="og:description"
          content="Software Engineer. Leader. Bumblebee Enthusiast. Like building software? Like using software? Like pink? Check this out."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Saakshaat Singh" />
        <meta property="og:url" content="https://saakshaat.me" />
        <meta name="theme-color" content="#f8e5e5" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="Saakshaat Singh" />
        <meta
          property="og:image"
          content='/images/og-cover.png'
          href='/images/og-cover.png'
        />
        <meta name="og:title" content={name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="apple-mobile-web-app-status-bar" content="#f8e5e5" />

        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-143950438-1"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-143950438-1');
              `,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@300&display=swap"
          rel="stylesheet"
          key="google-font-assistant"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&display=swap"
          rel="stylesheet"
          key="google-font-rajdhani"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap"
          rel="stylesheet"
          key="google-font-work-sans"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@700&display=swap"
          rel="stylesheet"
          key="google-font-heebo"
        />
        <title>{name}</title>
      </Head>
      {children}

      <Footer />
    </div>
  );
}
