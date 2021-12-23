import React, {useContext, useState} from 'react';
import '../CreateHabit/CreateHabit.scss';
import {customAlphabet} from 'nanoid';
import {AppContext} from "../../App";
import {useHistory} from "react-router-dom";

const nanoid = customAlphabet('1234567890', 10)


const CreateHabit = () => {
    const history = useHistory()
    const {setHabits} = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function createPost(e) {
        e.preventDefault()
        const newHabit = {
            id: Number(nanoid()),
            title: title,
            description: description,
            counter: 1
        }
        setHabits(prevState => [...prevState, newHabit])

        const prev = JSON.parse(localStorage.getItem('habits'))
        prev.push(newHabit)
        localStorage.setItem('habits', JSON.stringify(prev))
        return history.push('/private')
    }

    return (
        <form className='form-habit' onSubmit={createPost}>
            <input
                placeholder='Название привычки'
                className='form-habit__title'
                type="text"
                required
                maxlength="20"
                value={title}
                onChange={(e) => setTitle(e.target.value)}

            />
            <textarea
                className='form-habit__description'
                placeholder='Описание привычки'
                type="text-area"
                maxlength="60"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button
                className='form-habit__button'
                type="submit">Создать
            </button>
        </form>
    );
};

export default CreateHabit;
