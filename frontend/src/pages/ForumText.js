import React, { useState, useEffect } from 'react';
import Axios from "axios";
import '../style/forumtext.css'
import { Link } from 'react-router-dom';

export default function ForumText() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/postforum/allCategories')
        .then((response) => {
            setCategories(response.data)
        })
    }, [])

    return (
        <div className="buttons-container">
            {categories.map((category) => {
            return (
                <button className="btn-category"><Link className="link-category" to="/forumtextp3">{category.name}</Link></button>
            )
          }
        )}


        
        </div>
    )
}



