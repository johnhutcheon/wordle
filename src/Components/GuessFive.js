import { useState } from "react";

const GuessFive = ({ guessFiveComplete, setGuessFiveComplete }) => {
  const [square1, setSquare1] = useState("");
  const [square2, setSquare2] = useState("");
  const [square3, setSquare3] = useState("");
  const [square4, setSquare4] = useState("");
  const [square5, setSquare5] = useState("");

  const [guess, setGuess] = useState({});

  const answer = ["a", "a", "a", "a", "a"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setGuessFiveComplete(true);
    setGuess({ square1, square2, square3, square4, square5 });
  };

  console.log(answer[0], guess.square1);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="square1"
          type="text"
          maxLength="1"
          onChange={(e) => setSquare1(e.target.value)}
          value={square1}
        ></input>
        <input
          id="square2"
          type="text"
          maxLength="1"
          onChange={(e) => setSquare2(e.target.value)}
        ></input>
        <input
          id="square3"
          type="text"
          maxLength="1"
          onChange={(e) => setSquare3(e.target.value)}
        ></input>
        <input
          id="square4"
          type="text"
          maxLength="1"
          onChange={(e) => setSquare4(e.target.value)}
        ></input>
        <input
          id="square5"
          type="text"
          maxLength="1"
          onChange={(e) => setSquare5(e.target.value)}
        ></input>
        <input type="submit" value="Submit"></input>
      </form>
      {guess.square1 === answer[0] &&
      guess.square2 === answer[1] &&
      guess.square3 === answer[2] &&
      guess.square4 === answer[3] &&
      guess.square5 === answer[4] ? (
        <p>'WINNER!'</p>
      ) : null}
    </div>
  );
};

export default GuessFive;
