import React, {useContext, useState} from 'react';
import {customAlphabet} from 'nanoid'
import {AppContext, AuthContext} from "../../App";
import {useHistory} from "react-router-dom";

const nanoid = customAlphabet('1234567890', 10)

const CreateHabit = () => {
    const history = useHistory()
    const {isAuth} = useContext(AuthContext)
    const {setHabits} = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    function createPost(e) {
        e.preventDefault()
        const newHabit = {
            id: Number(nanoid()),
            title: title,
            description: description
        }
        setHabits(prevState => [...prevState, newHabit])
        console.log("newHabit",newHabit)
        return history.push('/private')
    }

    return (
        <form onSubmit={createPost}>
            <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}

            />
            <input type="text"
                   value={description}
                   onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Создать</button>
        </form>
    );
};

export default CreateHabit;
