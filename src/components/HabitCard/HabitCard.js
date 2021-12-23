import './HabitCard.css'
import {Link} from "react-router-dom";
import { useState, useContext} from 'react';

const HabitCards = (props) => {
let finishProgress=''
    
    const {card} = props;
    const {title, description, id} = card
    const [counter, setCounter] = useState(0)
    let className = `prog${counter}`

        function done(){
            if (counter === 9){

                return finishProgress = ': Done!'
            }
        }

        function increment(){
            if (counter<9)
            setCounter(counter+1)
        }
        function decrement(){
            if (counter>0)
            setCounter(counter-1)
        }
    return (
        <div>
        <Link className='links' to={`/habit/${id}`}>
            <div className="card">
                <h3 className="card__title">{title}</h3>
                <p className="card__description">{description}</p>
                <div> Прогресс {done()}</div>
                <div className='progress__wrapper'>
                <div className = {className}></div>
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
