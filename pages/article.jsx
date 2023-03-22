import { useRouter } from "next/router";
import articles from "../data/Articles.js";
import styles from "../components/Articles/article.module.scss";

import Image from "next/image";
import article1 from "../public/images/articles_1.png";
import inst from "../public/images/inst_icon.svg";
import facebook from "../public/images/facebook_icon.svg";
import back from "../public/images/article_back_arrow.svg";
import mainImage from "../public/images/article.png";
import Link from "next/link.js";

import info1 from "../public/images/article-info.png"
import info2 from "../public/images/article-info2.png"

export default function Article() {
  const router = useRouter();
  const { article } = router.query;
  const item = articles.find((i) => i.id === article);

  const startIndex = articles.findIndex((item) => item.id === article) + 1;
  const endIndex = startIndex + 3;

  let displayedItems = articles.slice(startIndex, endIndex);

  if (startIndex === articles.length) {
    displayedItems = articles.slice(0, 3);
  }

  return (
    <section className={styles.article}>
      {console.log(item)}
      <div className={styles.container}>
        <Image
          src={mainImage}
          alt="logo"
          layout={"raw"}
          className={styles.article__img}
        />

        <div className={styles.article__name}>
          <div className={styles.article__title_wrapp}>
            <Link href="/blog" className={styles.article__back}>
              <Image
                src={back}
                alt="logo"
                layout={"raw"}
                className={styles.article__back_img}
              />
            </Link>
            <div className={styles.article__name__wrapp}>
              <h2 className={styles.article__title}>{item.title}</h2>
              <p className={styles.article__date}>29.05.2020</p>
            </div>
          </div>
          <div className={styles.article__share}>
            <p>Поделиться:</p>
            <div className={styles.article__social_item}>
              <a href="#" className={styles.article__social_img_link}>
                <Image
                  src={inst}
                  alt="logo"
                  layout={"raw"}
                  className={styles.article__social_img}
                />
              </a>
            </div>
            <div className={styles.article__social_item}>
              <a href="#" className={styles.article__social_img_link}>
                <Image
                  src={facebook}
                  alt="logo"
                  layout={"raw"}
                  className={styles.footer__social_img}
                />
              </a>
            </div>
          </div>
        </div>
        <p className={styles.article__text}>{item.info1}</p>
        <Image
        
          className={styles.article__info_img}
          src={`/images/${item.image1}`}
          alt=""
          width="1020"
          height="432"
        />
        <p className={styles.article__text}>{item.info2}</p>
        <Image
          className={styles.article__info_img}
          src={`/images/${item.image2}`}
          alt=""
          width="1020"
          height="432"
        />
        <p className={styles.article__text}>{item.info3}</p>

        <div className={styles.article__footer}>
          <a className={styles.article__footer_back_link} href="./blog.html">
            <Image
              src={back}
              alt="logo"
              layout={"raw"}
              className={styles.article__footer_back_img}
            />
            Назад
          </a>
          <div className={styles.article__footer_button}>
            <button className={styles.article__footer_btn}>
              <a href="./home.html">Программы питания</a>
            </button>
          </div>
          <div className={styles.article__share}>
            <p>Поделиться:</p>
            <div className={styles.article__social_item}>
              <a href="#" className={styles.article__social_img_link}>
                {" "}
                <Image
                  src={inst}
                  alt="logo"
                  layout={"raw"}
                  className={styles.article__social_img}
                />
              </a>
            </div>
            <div className={styles.article__social_item}>
              <a href="#" className={styles.article__social_img_link}>
                <Image
                  src={facebook}
                  alt="logo"
                  layout={"raw"}
                  className={styles.article__social_img}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.article__more}>
          <h2 className={styles.article__more_title}>
            Вас может заинтересовать:
          </h2>
          <div className={styles.article__more_items}>
            {displayedItems.map((i) => (
              <div key={i.id} className={styles.articles__item}>
                {console.log(i)}
                <Link
                  href={{ pathname: "/article", query: { article: i.id } }}
                  className={styles.articles__link}
                >
                  <Image
                    src={article1}
                    alt="image"
                    layout={"raw"}
                    className={styles.articles__img}
                  />
                </Link>
                <h2 className={styles.articles__title}>{i.title}</h2>
                <div className={styles.articles__info}>
                  <p className={styles.articles__date}>29.05.2020</p>
                  <button className={styles.articles__btn}>
                    <Link
                      href={{
                        pathname: "/article",
                        query: { article: article.id },
                      }}
                    >
                      Подробнее
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
