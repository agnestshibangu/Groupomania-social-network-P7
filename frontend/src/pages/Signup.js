import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import Axios from "axios";
import '../form.css'
import DataContext from '../DataContext'

export default function Signup() {

    const history = useHistory();

    const { dataUser } = useContext(DataContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModerator, setIsModerator] = useState(false)
    

    function redirect() {
        history.push("/login")
    }

    const emailReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+[a-zA-Z0-9-]+)/

    

    const signup = () => {
        Axios.post('http://localhost:3001/api/user/signup', {
            name: name,
            email: email,
            password: password, 
        }).then((response) => {
            console.log(response)
            redirect()
        })
    }

    function emailValidation(email) {
        if (!email.match(emailReg)) {
            alert("error : email must be valid !")
          }
        signup();
    }

    return (
        <div className="form-container">
            <h1>Sign up to Groupomania</h1>

            <div className="form-container-box">


                <div className="inputs">

                    <div className="input">
                        <label for="name">Name:</label>
                        <input placeholder="name" type="text"
                            onChange={(e) => {
                                setName(e.target.value)
                            }}></input>
                    </div>


                    <div className="input">
                        <label for="name">Email:</label>
                        <input placeholder="email" type="text"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}></input>
                    </div>

                    <div className="input">
                        <label for="name">password:</label>
                        <input placeholder="password" type="password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}></input>
                    </div>

                </div>

                <div className="button-login-container">
                    <button className="submit-btn-login" onClick={() => signup, () => emailValidation(email)}>SUBMIT</button>
                </div>


            </div>

        </div>
    )
}

