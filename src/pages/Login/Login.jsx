import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {AuthContext} from '../../App'
import './Login.scss'
import {usersDb} from '../../databases/usersDb'


export default function Login() {

    const {login} = useContext(AuthContext)
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    function submitForm(e) {
        e.preventDefault()

        const getCurrentUser = usersDb.find((user) =>
            (user.login === email && user.password === pass))

        if (getCurrentUser) {
           
            login();
            alert(`Hello,${getCurrentUser.login}`)
            history.push('/private')

            

        } else alert('Проверьте правильность логина или пароля')
    }

    return (
        <form onSubmit={submitForm} className="form" action="">
            <h1 className="form__title">Вход</h1>
            <div className='form__input-wrapper'>
                <input required
                       value={email}
                       onChange={(event) => setEmail(event.target.value)}
                       className="form__email" type="text"
                       placeholder='Введите email'/>
                <input required
                       value={pass}
                       onChange={(event) => setPass(event.target.value)}
                       className="form__password"
                       type="password"
                       placeholder='Введите пароль'/>
            </div>
            <button type='submit' className='form__button'>Вход</button>
        </form>
    )
}
