import "../styles/globals.scss";
import React, { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="content">
      <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
