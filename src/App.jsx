import Header from "./components/Header/Header";
import Main from "./components/pages/Main";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <div className={"container"}>
        <Main />
      </div>
    </>
  );
};

export default App;
