import '../style/home.css'
import React, { useState, useEffect, useContext } from 'react';
import Axios from "axios";
import DataContext from '../DataContext'


export default function Home() {

    const { dataUser, LStoken } = useContext(DataContext)
    const [latestPosts, setLatestPosts] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/post/lastactivitypost'
        ,
        {headers: {
            Authorization: LStoken
          }
        })
        .then((response) => {
                setLatestPosts(response.data)
                console.log(response.data)
                
            })
    }, [])

    // // format date
    // const str = document.getElementById('date').innerHTML
    // const date = str.split("T",9)[0]
    // console.log(date)
    // ////

    
    

    return (
        <div>
            <div className="home-container">
                <h2>Bienvenue {dataUser.name} ! </h2>
                
                <div className="wrap-container">
                    <div className="last-activities-container">
                        <h3>Dernière activités sur le forum multimédia</h3>
                        <div className="underline"/>

                        <table className="table-last-activities">
                            <thead>
                                <tr>
                                    <th className="column title" colspan="1">Titre du post</th>
                                    <th className="column date" colspan="1">Date de publication</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latestPosts.map((post) => {
                                    return (
                                        <tr>
                                            <td className="col-body">{post.title}</td>
                                            <td className="col-body col-body2" id="date">{post.createdAt}</td>
                                        </tr>
                                    )
                                }
                                )}
                            </tbody>
                        </table>

                        {/* <h3>Dernière activités sur le forum de discussion</h3> */}



                    </div>
                   
                </div>
            </div>

        </div>
    )
}