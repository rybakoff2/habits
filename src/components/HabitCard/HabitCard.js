import './HabitCard.css'
import {Link} from "react-router-dom";
import {useState} from "react";

const HabitCards = (props) => {
    let finishProgress = ''

    const {card} = props;
    const {title, description, id, counter} = card
    const [currentCounter, setCurrentCounter] = useState(counter)

    let className = `prog${currentCounter}`

    function done() {
        if (currentCounter === 9) {
            return finishProgress = ': Done!'
        }
    }

    function updateLocalStorage() {
        const prev = JSON.parse(localStorage.getItem('habits'))
        const index = prev.findIndex(item => item.id == id)
        const current = {...prev[index], counter: currentCounter}
        prev[index] = current
        localStorage.setItem('habits', JSON.stringify(prev))
    }

    function increment() {
        if (currentCounter < 9)
            setCurrentCounter(prevState => prevState + 1)
        updateLocalStorage()
    }

    function decrement() {
        if (currentCounter > 0)
            setCurrentCounter(prevState => prevState - 1)
        updateLocalStorage()
    }

    return (
        <div>
            <Link className='links' to={`/habit/${id}`}>
                <div className="card">
                    <h3 className="card__title">{title}</h3>
                    <p className="card__description">{description}</p>
                    <div> Прогресс {done()}</div>
                    <div className='progress__wrapper'>
                        <div className={className}></div>
                    </div>
                </div>

            </Link>
            <div className='card__wrapper-btn'>
                <button className='card__button card__button-red' onClick={decrement}>-</button>
                <button className='card__button card__button-green' onClick={increment}>+</button>
            </div>
        </div>

    );
};
export default HabitCards;
