import React from 'react'
import AboutMe from '../components/AboutMe'
import HistoryGastroChef from '../components/HistoryGastroChef'
import photo from "../public/images/photo_team.png"
import Image from 'next/image';
import AccordionMy from "../components/Accordion";
import Form from "../components/FormPages";
import PhotosSwiper from '../components/PhotosSwiper';
import GastroChefEasy from '../components/GastroChefEasy';

export default function about() {
  return (
    <div>
      <AboutMe />
      <HistoryGastroChef/>
      <Image className="about_photo" src={photo}  layout={'raw'}/>
      <GastroChefEasy />
      <PhotosSwiper />
      <div className="form__flex"x>
        <Form />
        <AccordionMy />
        </div>
    </div>
  )
}
