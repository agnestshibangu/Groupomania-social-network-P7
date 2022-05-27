import React, { useState } from 'react'
// import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import Axios from "axios";
import '../style/form.css'
// import DataContext from '../DataContext'
import { Link } from 'react-router-dom'

export default function Login() {

    const history = useHistory();

    //const { dataUser, setDataUser } = useContext(DataContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wrongPassword, setWrongPassword] = useState(false)


    function redirect() {
        history.push("/")
    }


    const login = () => {
        Axios.post('http://localhost:3001/api/user/login', {
            email: email,
            password: password
        }).then((response) => {
            localStorage.setItem("token", "Bearer " + response.data.token)
            console.log(response.data.userId)
            console.log(response.data.moderator)
            localStorage.setItem("id", response.data.userId)
            localStorage.setItem("moderator", response.data.moderator)
            redirect()
        }).catch(() => {
            setWrongPassword(true)
        })

    }

    const emailReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+[a-zA-Z0-9-]+)/
    const passwordReg = /^[A-Za-z0-9]\w{8,}$/

    function emailValidation(email) {
        if (!email.match(emailReg)) {
            alert("error : email must be valid !")
            return
        } else if (!password.match(passwordReg)) {
            alert("error: password must be valid ! ")
            return
        }
        login();
    }

    const PasswordErr = () => (
        <div className="error-password-div">
            Your password is incorrect
        </div>
    )

    return (

        <div className="form-container">
            <h1 className="main-title">Sign in to Groupomania</h1>

            <div className="form-container-box">


                <div className="inputs">

                    <div className="input">
                        <label htmlFor="inputEmail">Email:</label>
                        <input placeholder="email" type="email" className="form-control" id="inputEmail"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}></input>
                    </div>


                    <div className="input">
                        <label htmlFor="inputPassword">password:</label>
                        <input placeholder="password" type="password" className="form-control" id="inputPassword"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}></input>
                        <p>(Le mot de passe doit contenir au moins 8 caractères)</p>
                        {wrongPassword ? <PasswordErr /> : null}
                    </div>

                    <button className="submit-btn-login" onClick={() => login, () => emailValidation(email, password)}>SUBMIT</button>

                </div>

            </div>

            <p>Vous n&apos;avez pas de compte ?</p>  <Link className="signup-link" to="/signup">Créer un compte</Link>

        </div>
    )
}
