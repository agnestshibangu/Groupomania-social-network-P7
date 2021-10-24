import React, { useState, useEffect, useCallback, useContext } from 'react'
import AddCommentModal from '../components/AddCommentModal'
import DataContext from '../DataContext'
import Axios from "axios";
import { FaTrashAlt } from 'react-icons/fa';
import '../style/Comment.css'


export default function CommentSection({postId}) {

    const { dataUser, LStoken } = useContext(DataContext)
    const [comments, setComments] = useState([])
    const [isOpenCommentModal, setIsOpenCommentModal] = useState(false)
    const [comment, setComment] = useState('')
    const userId = dataUser.id


    const fetchComments = useCallback(() => {
        Axios.get(`http://localhost:3001/api/comment/ofpost/${postId}`
        //,
            // {
            //     headers: {
            //         Authorization: LStoken
            //     }
            // }
        )
            .then((response) => {
                setComments(response.data)
                console.log(response.data)
            })
    },
        // [LStoken]
    )

    const submitComment = useCallback(() => {
        console.log(LStoken)
        const userId = dataUser.id
        console.log(postId)
        Axios.post(`http://localhost:3001/api/comment/${postId}`,
            //   {headers: {
            //       Authorization: LStoken
            //    }},
            {
                content: comment,
                userId: userId
            })
        setIsOpenCommentModal(!isOpenCommentModal)
        setComments([...comments, { comment: comment }])
    }, [comment, postId])


    const deleteComment = (id) => {
        console.log(id)
        Axios.delete(`http://localhost:3001/api/comment/${id}`,
            // {
            //     headers: {
            //         Authorization: LStoken
            //     }
            // }
        )
        const newComments = comments.filter((comment) => comment.id !== id);
        setComments(newComments)
    }

    useEffect(() => {
        fetchComments();
        
    }, []);


    return (
        <div>
            <div className="horizontal-bar"></div>
            <button className="add-comment-btn" onClick={() => setIsOpenCommentModal(true)}>Add a comment</button>

            <AddCommentModal open={isOpenCommentModal} onClose={() => setIsOpenCommentModal(false)}>
                <textarea className="input-content" placeholder="Add a comment" name="content" type="text"
                    onChange={(e) => {
                        setComment(e.target.value)
                    }}></textarea>
                <button className="submit-btn" onClick={submitComment}>SUBMIT</button>
            </AddCommentModal>


            <div className="comment-section">
                {comments.map((comment) => {
                    return (
                        <div className="comment-single">
                            <p className="comment-text">{comment.content}</p>

                        { comment.userId == userId || dataUser.moderator == true ? 

                         <FaTrashAlt className="delete-comment-btn" onClick={() => deleteComment(comment.id)} />

                         : null 
                        
                        }


                           
                        </div>
                    )
                })}
            </div>

        </div>
    )


}
