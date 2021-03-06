import "./Main.scss";
import Motivation from "../Motivation/Motivation";
import { imageDd } from "../../databases/ImageDb";
import { useState } from "react";

function Main() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="main">
      <h1 className="main__head">Habits tracker - дневник Ваших привычек</h1>
      <hr className="main__hr" />
      <div className="main__image-wrapper">
        <button
          className="main__image-button"
          onClick={() => {
            if (counter > 0 && counter <= imageDd.length - 1) {
              setCounter(counter - 1);
            } else {
              setCounter(imageDd.length - 1);
            }
          }}
        >
          {"<<"}
        </button>

        <img className="main__image" src={imageDd[counter]} alt="" />
        <button
          className="main__image-button"
          onClick={() => {
            if (counter >= 0 && counter < imageDd.length - 1) {
              setCounter(counter + 1);
            } else {
              setCounter(0);
            }
          }}
        >
          {">>"}
        </button>
      </div>
      <Motivation />
    </div>
  );
}

export default Main;
