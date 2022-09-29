import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div>
      <div className="game">
        <p className="points">
          <span>Pontuação: 000</span>
        </p>
        <h1>Adivinhe a palavra</h1>
        <h3 className="tip">
          Dica sobre a palavra: <span>dica...</span>
        </h3>
        <div className="word-container">
          <span className="letter">A</span>
          <span className="blank-square"></span>
        </div>
        <div className="letter-container">
          <p>Tente adivinhar uma letra da palavra</p>
          <form>
            <input type="text" maxLength="1" name="letter" required />
            <button>Jogar!</button>
          </form>
        </div>
        <div className="wrong-letters-container">
          <p>Letras já utilizadas</p>
          <span>a,</span>
          <span>b,</span>
        </div>
      </div>
    </div>
  )
}

export default Game