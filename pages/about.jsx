import React from 'react'
import AboutMe from '../components/AboutMe'
import HistoryGastroChef from '../components/HistoryGastroChef'
import photo from "../public/images/photo_team.png"
import Image from 'next/image';
import AccordionMy from "../components/Accordion";
import Form from "../components/FormPages";
import PhotosSwiper from '../components/PhotosSwiper';
import GastroChefEasy from '../components/GastroChefEasy';
import queries from '../data/queries';

export default function about({accordion}) {
  return (
    <div>
      <AboutMe />
      <HistoryGastroChef/>
      <Image className="about_photo" src={photo}  layout={'raw'}/>
      <GastroChefEasy />
      <PhotosSwiper />
      <div className="form__flex"x>
        <Form />
        <AccordionMy accordion={accordion}/>
        </div>
    </div>
  )
}


export async function getStaticProps() {
  const res = await queries.get('/faq');
  return {
    props: {
      accordion: res.data
    },
  };
}