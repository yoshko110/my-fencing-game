import logo from "./logo.svg";
import "./App.css";
import Fencer1 from "./Fencer1.jpg";
import Fencer2 from "./Fencer2.jpg";
import { useState } from "react";

function App() {
  // let scoreP = 0;
  // let scoreP2 = 0;
  const [scoreP1, setScore] = useState(0);
  const [scoreP2, setscoreP2] = useState(0);
  const [livel1, setLevel1] = useState(5);
  const [livel2, setLevel2] = useState(15);
  const [livel3, setLevel3] = useState(45);

  const scoring1 = () => {
    return setScore(scoreP1 + 1);
  };
  const scoring2 = () => {
    return setscoreP2(scoreP2 + 1);
  };
  const winner1 = () => {
    if (scoreP1 == 5) return setLevel1;
  };

  return (
    <div>
      <header className="App">
        <dive>
          <img onClick={scoring1} src={Fencer1} alt="Fencing photo" />
          <img onClick={scoring2} src={Fencer2} alt="Fencing photo" />
          <dive>
            <h1 className=".h1flexP1 ">Left player score {scoreP1}</h1>
            <h1 className=".h1flexP2 ">Right player score {scoreP2}</h1>
          </dive>
        </dive>
      </header>
    </div>
  );
}

export default App;
