import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import 'swiper/swiper-bundle.min.css';
import queries from '../data/queries';
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Slider from "../components/Slider";
import Advantages from "../components/Advantages";
import AccordionMy from "../components/Accordion";
import Form from "../components/FormPages";
import PhotosSwiper from "../components/PhotosSwiper";
import Program from "../components/Program/Program";
import ProgramSlider from "../components/Program/ProgramSlider";

export default function Home({accordion, programs}) {
  const [selectedLink, setSelectedLink] = useState("program");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>GastroChef</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <Slider />
        <Advantages />
        <div className={styles.program__container}>
        <ProgramSlider programs={programs} />
        </div>
        <PhotosSwiper />
        <div className="form__flex"x>
        <Form />
        <AccordionMy accordion={accordion}/>
        </div>
        
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getServerSideProps() {
  const res1 = await queries.get('/faq');
  const res2 = await queries.get('/mealplan');
  return {
    props: {
      accordion: res1.data,
      programs: res2.data
    },
  };
}