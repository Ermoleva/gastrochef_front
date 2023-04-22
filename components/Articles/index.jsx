import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Articles({articles}) {
  return (
    <section className={styles.articles}>
      <div className={styles.container}>
        <div className={styles.articles__items}>
          {articles.map((article) => (
            <div className={styles.articles__item} key={article.id}>
              <Link href={{pathname: '/article', query : {article: article.id}}} className={styles.articles__link}>
                <Image
                  src={`/images/${article.preview}`}
                  alt="image"
                  width="380"
                  height="190"
                  className={styles.articles__img}
                />
                <h2 className={styles.articles__title}>{article.title}</h2>
              </Link>
              
              <div className={styles.articles__info}>
                <p className={styles.articles__date}>29.05.2020</p>
                <button className={styles.articles__btn}>
                  <Link href={{pathname: '/article', query : {article: article.id}}}>Подробнее</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
