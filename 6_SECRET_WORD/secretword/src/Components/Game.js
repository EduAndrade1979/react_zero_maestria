import { useRef, useState } from "react";
import "./Game.css";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };

  return (
    <div>
      <div className="game">
        <p className="points">
          <span>Pontuação: {score}</span>
        </p>
        <h1>Adivinhe a palavra</h1>
        <h3 className="tip">
          Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentativa(s)</p>
        <div className="word-container">
          {letters.map((letter, i) =>
            guessedLetters.includes(letter) ? (
              <span key={i} className="letter">
                {letter}
              </span>
            ) : (
              <span key={i} className="blank-square"></span>
            )
          )}
        </div>
        <div className="letter-container">
          <p>Tente adivinhar uma letra da palavra</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              maxLength="1"
              name="letter"
              required
              onChange={(e) => setLetter(e.target.value)}
              ref={letterInputRef}
              value={letter}
            />
            <button>Jogar!</button>
          </form>
        </div>
        <div className="wrong-letters-container">
          <p>Letras já utilizadas</p>
          {wrongLetters.map((l, i)=> (
            <span key={i}>{l} - </span> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
