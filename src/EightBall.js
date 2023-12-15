import React, { useState } from "react";
import './EightBall.css';

const EightBall = ({ answers }) => {
    const [ currentColor, setCurrentColor ] = useState("black");
    const [ currentMessage, setCurrentMessage ] = useState("Think of a Question");
    const [ isQuestion, setIsQuestion ] = useState(true)


    const restart = () => {
        setCurrentColor("black");
        setCurrentMessage("Think of a Question");
        setIsQuestion(true);
    }
    const showAnswer = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const { msg, color } = answers[randomIndex];
        setCurrentColor(color);
        setCurrentMessage(msg);
        setIsQuestion(false);
    }

    const eightBallClass = isQuestion 
          ? "EightBall-question"
          : "EightBall-answer";


    return (
      <div className="EightBall">
        <button
          className={eightBallClass}
          onClick={showAnswer}
          style={{ backgroundColor: currentColor }}
        >
          {currentMessage}
        </button>

        <button className="EightBall-restart" onClick={restart}>
          Ask Another?
        </button>
      </div>
    );
}

export default EightBall;