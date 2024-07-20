import styles from "./styles.module.css";
import NewsBanner from "../NewsBanner/NewsBanner";
import { useEffect } from "react";
import { getNews } from "../api/apiNews";
import { useState } from "react";
import NewsList from "../NewsList/NewsList";

const Main = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (e) {
        console.log(e);
      }
    };
    fetchNews();
  }, []);
  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
      <NewsList news={news} />
    </main>
  );
};

export default Main;
