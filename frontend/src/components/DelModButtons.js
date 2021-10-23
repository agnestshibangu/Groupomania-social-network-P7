import React, { useEffect, useCallback, useState, useContext } from 'react';
import Axios from "axios";
import DataContext from '../DataContext'


export default function DelModButtons({ open, post, postId, postUserId }) {

    const { dataUser, LStoken } = useContext(DataContext)
    const [posts, setPosts] = useState([])
    const [isToggledDelMod, setisToggledDelMod] = useState(false)


    if (dataUser.id == post.id) {
        console.log('c est le bon utilisateur')
        return (
            <div>
        
            </div>
        )
    }   return ( null )

    
  
}
