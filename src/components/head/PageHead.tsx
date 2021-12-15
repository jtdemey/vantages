import React from "react";
import Head from "next/head";

type PageHeadProps = {
  stylesheets: string[]
};

const PageHead = ({ stylesheets }: PageHeadProps): JSX.Element => (
  <Head>
    <title>[Vantages]</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    ></link>
    {stylesheets && stylesheets.map((href: string) => (
      <link
        key={href}
        href={href}
        rel="stylesheet"
      ></link>
    ))}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="icon/apple-touch-icon.png"
    ></link>
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="icon/favicon-32x32.png"
    ></link>
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="icon/favicon-16x16.png"
    ></link>
  </Head>
);

export default PageHead;
