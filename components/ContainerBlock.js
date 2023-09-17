import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hacked from "../public/hacked.png"
// import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();
  const meta = {
    title: "Pradeep Dahal - Engineer ,Developer, Writer, Bibliophile",
    description: `Welcome to my little nook filled with passion, positivity and poetry.`,
    image:Hacked.src,
    type: "website",
    // date: new Date(),
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="../public/hacked.png" />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://erpradeepdahal.com.np${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://erpradeepdahal.com.np${router.asPath}`}
        />
        <meta name="google-site-verification" content="rr3sCjhb92dMLITE924tlK9biOnG3vxqIcLF91zc51A" />
        <meta name="google-site-verification" content="bjOQmOeEJ5dRlYMIMKrX2Nfo5EiAzhY_qzCsLiBrFO8" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Pradeep Dahal" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dhlpradip" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}