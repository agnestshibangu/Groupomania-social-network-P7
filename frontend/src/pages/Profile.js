import React, { useContext, useState, useEffect } from 'react'
import DataContext from '../DataContext'
import '../style/profile.css'
import DeleteAccModal from '../components/DeleteAccModal'
import Axios from "axios";
import { useHistory } from "react-router-dom";

export default function Profile() {

    const history = useHistory(); 

    const [isOpenDeleteAccModal, setIsOpenDeleteAccModal] = useState(false)
    const [isprofileDeleted, setisprofileDeleted] = useState(false)

    const { dataUser, LStoken } = useContext(DataContext)

     // redirection if user is not logged //
     function redirectLogin() {
        history.push("/login")
    }

    useEffect(() => {
       if (!LStoken) {
        redirectLogin()
       }
    }, [])

    /////////////////////////////////////


    function deleteAccount(id) {
        Axios.delete(`http://localhost:3001/api/user/delete/${dataUser.id}`)
        .then((response) => {
            console.log(response + 'utilsateur supprimé')
            setisprofileDeleted(true)
            localStorage.setItem('token', '')
            localStorage.setItem('id','')
        })
    }

    if (isprofileDeleted) {
        return (
            <div className="main-container">
                <div className="delete-profile-msg">Profile supprimé</div>
            </div>  
        )
    }


    return (
        <div className="main-container">
            <div className="profile-container">
                <div className="info-container">
                    <div className="info">
                        <div>{dataUser.id}</div>
                        <p>email: {dataUser.email}</p>
                        <p>inscrit depuis: {dataUser.createdAt}</p>
                        <p>modérateur:</p>
                    </div>
                </div>
               
            </div>
            <button className="delete-account-button" onClick={() => setIsOpenDeleteAccModal(true)}>Supprimer mon compte</button>
            <DeleteAccModal open={isOpenDeleteAccModal} onClose={() =>  setIsOpenDeleteAccModal(false)} >
            Voulez-vous vraiment supprimer votre compte ?
            <div className="answer-btn-box">
            <button className="btn-answer yes" onClick={() => deleteAccount(dataUser.id)}>Oui</button>
            </div>
            </DeleteAccModal>
        </div>
    )




}

