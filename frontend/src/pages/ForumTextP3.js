import React, { useState, useEffect } from 'react';
import Axios from "axios";
import '../style/forumtext.css'

export default function ForumTextP3() {

    const [topics, setTopics] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/postforum/allTopicsCat1')
        .then((response) => {
            console.log(response.data)
            setTopics(response.data)
        })
    }, [])

    return (
        <div>
            <h1>HELLO</h1>
            {topics.map((topic) => {
            return (
                <h4>{topic.title}</h4>
            )
          }
        )}
        </div>
    )
}
