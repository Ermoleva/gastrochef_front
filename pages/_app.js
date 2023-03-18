import "../styles/globals.scss";
import React, { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Header/>
      <div className="content">
      <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
