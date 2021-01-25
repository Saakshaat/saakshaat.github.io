import { Component } from "react";

import Head from "next/head";

const name = "Saakshaat Singh";
export const siteTitle = "**Saakshaat** Singh";

export default function Layout({ children }) {
  return <></>;
}

export class GlobalLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Saakshaat Singh. Software Engineer. Chair. UMass Amherst." />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=dark&md=1&fontSize=175px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <title>{name}</title>
        </Head>

        <div>{children}</div>
      </div>
    );
  }
}

