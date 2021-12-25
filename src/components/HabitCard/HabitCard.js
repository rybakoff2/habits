import "./HabitCard.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../../App";

const HabitCards = (props) => {
  
  const { habits } = useContext(AppContext);
  const { card } = props;
  const { title, description, id, counter } = card;
  const [currentCounter, setCurrentCounter] = useState(counter);
  let className = `progress-bar${currentCounter}`;
  let finishProgress;

  function done() {
    if (currentCounter === 9) {
      return (finishProgress = ": Done!");
    }
  }

  function increment() {
    if (currentCounter < 9) setCurrentCounter(currentCounter + 1);
      updateLocalStorage();
  }

  function decrement() {
    if (currentCounter > 0) setCurrentCounter(currentCounter - 1);
     updateLocalStorage();
  }

  function updateLocalStorage() {
    const index = habits.findIndex((item) => item.id == id);
    const current = { ...habits[index], counter: currentCounter };
    habits[index] = current;
    localStorage.setItem("habits", JSON.stringify(habits));
  }

  return (
    <div>
      <Link className="links" to={`/habit/${id}`}>
        <div className="card">
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
          <div> Прогресс {done()}</div>
          <div className="progress__wrapper">
            <div className={className}></div>
          </div>
        </div>
      </Link>
      <div className="card__wrapper-btn">
        <button className="card__button card__button-red" onClick={decrement}>
          -
        </button>
        <button className="card__button card__button-green" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};
export default HabitCards;
