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


        const answer = prompt('Вы точно хотите удалить?')
        if (answer === '1') {
            const newHabits = habits.filter(item => item.id != id)
            setHabits(newHabits)
            console.log("deletedHabit")
            return history.push('/private')
        }

        console.log("NOT deletedHabit")

    }


    return (
        <div className="habit">
            <h3 className="card__title">{habit.title}</h3>
            <p className="card__description">{habit.description}</p>
            <div>
                <button onClick={deleteHabit}>X</button>
            </div>
        </div>
    );
};

export default Habit;
