import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import './Habit.scss'
import {AppContext} from "../../App";

const Habit = () => {
    const history = useHistory()
    const [habit, setHabit] = useState(null)
    const {habits, setHabits} = useContext(AppContext)
    const {id} = useParams()

    useEffect(() => {
        const currentHabit = habits.find((item) => item.id === Number(id))
        setHabit(currentHabit)
    }, [])

    if (!habit) {
        return (
            <div>Loading...</div>
        )
    }

    function deleteHabit() {

        const answer = prompt('Хотите далить?Для подтверждения введите "Yes" или "Да"')
        if (answer === 'Yes'||answer ==='yes'||answer ==='Да'||answer ==='да') {
            const newHabits = habits.filter(item => item.id != id)
            setHabits(newHabits)
            localStorage.setItem('habits',JSON.stringify(newHabits))
            return history.push('/private')
        }

    }


    return (
        <div className="habit">
            <h3 className="habit__title">{habit.title}</h3>
            <p className="habit__description">{habit.description}</p>
            <div>
                <button className='habit__button' onClick={deleteHabit}>Удалить привычку</button>
            </div>
        </div>
    );
};

export default Habit;
