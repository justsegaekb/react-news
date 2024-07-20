import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

const NewsList = ({ news }) => {
  return (
    <ul>
      {news.map((item) => {
        return <NewsItem key={item.id} className={styles.list} item={item} />;
      })}
    </ul>
  );
};

export default NewsList;
