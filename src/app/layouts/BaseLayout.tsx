import { Header } from "@/widgets/header/ui";
import { useTheme } from "../providers/context/ThemeProvider";
import "@/shared/index.css";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
