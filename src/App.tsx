import Header from "./components/Header/Header";
import Main from "./components/pages/Main";
import { useTheme } from "./context/ThemeContext";
import "./index.css";

const App = () => {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
};

export default App;
