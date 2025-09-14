import { useState } from "react";
import Header from "./conpor/Header";
import Icon from "./conpor/Icon";
import ConN from "./conpor/ConN";
import ConF from "./conpor/ConF";
import Footer from "./conpor/Footer";
import About from "./conpor/Aboutme";
import Pron1 from "./conpor/pron1";
import Pron2 from "./conpor/pron2";
import Pron3 from "./conpor/pron3";
import Pron4 from "./conpor/pron4";
import Pron5 from "./conpor/pron5";
import Pron6 from "./conpor/pron6";
import Pron7 from "./conpor/pron7";
import Pron8 from "./conpor/pron8";
import Porkira from "./conpor/porkira";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Header setPage={setPage} />
      {page === "home" ? (
        <>
          <Icon />
          <ConN setPage={setPage} />
          <ConF setPage={setPage}/>
        </>
      ) : page === "about" ? (
        <About />
      ) : page === "porkira" ? (
        <Porkira/>
      ) : page === "pron1" ? (
        <Pron1 />
      ) : page === "pron2" ? (
        <Pron2 />
      ) : page === "pron3" ? (
        <Pron3 />
      ) : page === "pron4" ? (
        <Pron4 />
      ) : page === "pron5" ? (
        <Pron5 />
      ) : page === "pron6" ? (
        <Pron6 />
      ) : page === "pron7" ? (
        <Pron7 />
      ) : page === "pron8" ? (
        <Pron8 />
      ): null}
      <Footer />
    </>
  );
}

export default App;