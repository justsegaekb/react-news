import Main from "@/pages/main/ui/Page";
import { Header } from "@/widgets/header/ui";
import { useTheme } from "../providers/context/ThemeProvider";
import "@/shared/index.css";

const BaseLayout = () => {
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

export default BaseLayout;
