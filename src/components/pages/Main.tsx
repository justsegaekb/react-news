import styles from "./styles.module.css";
import LatestNews from "../LatestNews/LatestNews";
import NewsByFilters from "../NewsByFilters/NewsByFilters";

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default Main;
