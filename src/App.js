import "./styles.css";
import Nav from "./components/nav/Nav";
import Home from "./components/Home/Home";
import Residence from "./components/Residence/Residence";
import Values from "./components/Values/Values";
import Contact from "./components/Contact/Contact";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import Conta from "./components/conta/Conta";
import Citys from "./components/Citys/Citys";
import Animation from "./components/Animation/Animation";
import Hierarchy from "./components/Hierarchy/Hierarchy";

import { useState, useEffect } from "react";

export default function App() {
  const [activeBtn, setActiveBtn] = useState("");

  return (
    <div className="App">
      <Nav />
      <Home />
      <Residence />
      <Values />
      <Contact />
      <Conta />
      <Citys />
      {/* <Animation /> */}
      <Hierarchy />
      <section>
        <div className="container">
          <button
            className={activeBtn === "first" ? "active" : undefined}
            onClick={() => setActiveBtn("first")}
          >
            adventure
          </button>
          <button
            className={activeBtn === "second" ? "active" : undefined}
            onClick={() => setActiveBtn("second")}
          >
            aromatic
          </button>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </div>
  );
}
