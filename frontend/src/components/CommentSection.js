import React, { useState, useEffect, useCallback, useContext } from 'react'
import AddCommentModal from '../components/AddCommentModal'
import DataContext from '../DataContext'
import Axios from "axios";
import { FaTrashAlt } from 'react-icons/fa';

export default function CommentSection({postId}) {

    const { dataUser, LStoken } = useContext(DataContext)
    const [comments, setComments] = useState([])
    const [isOpenCommentModal, setIsOpenCommentModal] = useState(false)
    const [comment, setComment] = useState('')
    // console.log(postId)


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
        Axios.post(`http://localhost:3001/api/comment/${postId}`,
            //   {headers: {
            //       Authorization: LStoken
            //   }},
            {
                content: comment,
                userId: userId
            })
        setIsOpenCommentModal(!isOpenCommentModal)
        setComments([...comments, { comment: comment }])
    }, [comment, postId])


    // const deleteComment = (id) => {
    //     console.log(userId)
    //     console.log(dataUser.id)
    //     Axios.delete(`http://localhost:3001/api/post/${id}`,
    //         {
    //             headers: {
    //                 Authorization: LStoken
    //             }
    //         }
    //     )
    //     const newComments = posts.filter((post) => post.id !== id);
    //     setPosts(newComments)
    // }

    useEffect(() => {
        fetchComments();
        
    }, []);


    return (
        <div>
            <p>{postId} + comment section</p>
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
                            <p>{comment.content}</p>
                            <FaTrashAlt />
                        </div>
                    )
                })}
            </div>

        </div>
    )


}
