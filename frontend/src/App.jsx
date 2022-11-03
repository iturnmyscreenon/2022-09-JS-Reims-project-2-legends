import "./App.css";
import React, { useState } from "react";
import DraftPage from "./components/Draft/DraftPage";
import HomePage from "./components/Homepage/Homepage";
import CombatMode from "./components/Combat/CombatMode";

export default function App() {
  const [activePage, setActivePage] = useState("homepage");
  const [draftRound, setDraftRound] = useState(1);
  const [cardSelected, setCardSelected] = useState([]);
  const [cardComputer, setCardComputer] = useState([]);
  const play = () => {
    setActivePage("draftPage");
  };
  return (
    <div className="App">
      {activePage === "homepage" && <HomePage play={play} />}
      {activePage === "draftPage" && (
        <DraftPage
          draftRound={draftRound}
          setDraftRound={setDraftRound}
          cardSelected={cardSelected}
          setCardSelected={setCardSelected}
          cardComputer={cardComputer}
          setCardComputer={setCardComputer}
          setActivePage={setActivePage}
        />
      )}
      {activePage === "combatpage" && (
        <CombatMode
          cardSelected={cardSelected}
          setCardSelected={setCardSelected}
          cardComputer={cardComputer}
          setCardComputer={setCardComputer}
        />
      )}
    </div>
  );
}
