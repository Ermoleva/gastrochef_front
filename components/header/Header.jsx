import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../public/images/logoHeader.svg";
import phone from "../../public/images/phone_icon.svg"


export default function Header() {
  const [selectedLink, setSelectedLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className={styles.header}>
      <Image src={logo} className={styles.logo} />
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${isOpen ? styles.header__links_mobile : styles.header__links}`}>
        <Link 
        
          href="/"
          className={`${styles.header__link} ${
            selectedLink === "program" ? styles.selected : ""
          }`}
          onClick={() => {handleLinkClick("program"), closeMenu()}}
        >
          Программа питания
        </Link>
        <Link 
        
          href="/lunch"
          className={`${styles.header__link} ${
            selectedLink === "business" ? styles.selected : ""
          }`}
          onClick={() => {handleLinkClick("business"), closeMenu()}}
        >
          Бизнес ланчи
        </Link>
        <Link 
        
          href="/shop"
          className={`${styles.header__link} ${
            selectedLink === "shop" ? styles.selected : ""
          }`}
          onClick={() => {handleLinkClick("shop"),closeMenu()}}
        >
          Gastro Shop
        </Link>
        <Link 
        
          href="/about"
          className={`${styles.header__link} ${
            selectedLink === "about" ? styles.selected : ""
          }`}
          onClick={() => {handleLinkClick("about"),closeMenu()}}
        >
          О нас
        </Link>
       
        <Link 
        
          href="/blog"
          className={`${styles.header__link} ${
            selectedLink === "blog" ? styles.selected : ""
          }`}
          onClick={() => {handleLinkClick("blog"),closeMenu()}}
        >
          Блог
        </Link>
        
        <Link href="tel:+380636529793" className={styles.header__phone_number_mobile}>
          <p> +38 (063) 652-97-93</p>
        </Link>
      </div>
      <div className={styles.header__right}>
      <div className={styles.header__favorites}>
      <Link 
        
        href="/favorites"
        className={`${styles.header__link} ${
          selectedLink === "favorites" ? styles.selected : ""
        }`}
        onClick={() => {handleLinkClick("favorites"),closeMenu()}}
      >
         <svg className={styles.header__favorites_svg} width="24" height="24"
          viewBox="0 0 24 24"
          fill='#fff'
          stroke="#64D370"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </Link>
      </div>
      <div className={styles.header__phone}>
      
        <Link href="tel:+380636529793" className={styles.header__phone_number}>
          <p> +38 (063) 652-97-93</p>
          <Image src={phone} className={styles.header__phone_number_icon} width={64} height={64}/> 
        </Link>
      </div>
      </div>
    </header>
  );
}
