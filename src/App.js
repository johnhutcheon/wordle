import "./App.css";
import GuessOne from "./Components/GuessOne";
import GuessTwo from "./Components/GuessTwo";
import GuessThree from "./Components/GuessThree";
import GuessFour from "./Components/GuessFour";
import GuessFive from "./Components/GuessFive";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [guessOneComplete, setGuessOneComplete] = useState(false);
  const [guessTwoComplete, setGuessTwoComplete] = useState(false);
  const [guessThreeComplete, setGuessThreeComplete] = useState(false);
  const [guessFourComplete, setGuessFourComplete] = useState(false);
  const [guessFiveComplete, setGuessFiveComplete] = useState(false);
  const [winner, setWinner] = useState(false);

  return (
    <div className="App">
      <Header />
      <GuessOne
        setGuessOneComplete={setGuessOneComplete}
        guessOneComplete={guessOneComplete}
        setWinner={setWinner}
      />
      {guessOneComplete ? (
        <GuessTwo
          setGuessTwoComplete={setGuessTwoComplete}
          guessTwoComplete={guessTwoComplete}
        />
      ) : null}
      {guessTwoComplete ? (
        <GuessThree
          setGuessThreeComplete={setGuessThreeComplete}
          guessThreeComplete={guessTwoComplete}
        />
      ) : null}
      {guessThreeComplete ? (
        <GuessFour
          setGuessFourComplete={setGuessFourComplete}
          guessFourComplete={guessFourComplete}
        />
      ) : null}
      {guessFourComplete ? (
        <GuessFive
          setGuessFiveComplete={setGuessFiveComplete}
          guessFiveComplete={guessFiveComplete}
        />
      ) : null}
    </div>
  );
}

export default App;
