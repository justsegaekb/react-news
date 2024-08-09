import { useTheme } from "@/app/providers/context/ThemeProvider";
import formatDate from "@/shared/helpers/formatDate";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <>
      <header
        className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
      >
        <div className={styles.info}>
          <Link to={"/"}>
            <h1 className={styles.title}>React News</h1>
          </Link>
          <p className={styles.date}>{formatDate(new Date())}</p>
        </div>
        <button onClick={toggleTheme}>ThemeSwitcher</button>
      </header>
    </>
  );
};

export default Header;
