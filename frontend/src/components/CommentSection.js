import React, { useState, useEffect, useCallback, useContext } from 'react'
import AddCommentModal from '../components/AddCommentModal'
import DataContext from '../DataContext'
import Axios from "axios";

export default function CommentSection({ postId }) {

    const { dataUser, LStoken } = useContext(DataContext)
    const [comments, setComments] = useState([])
    const [isOpenCommentModal, setIsOpenCommentModal] = useState(false)
    const [comment, setComment] = useState('')
    console.log(postId)


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


    useEffect(() => {
        fetchComments();
    }, [ ]);


    const submitComment = useCallback(() => {

        console.log(LStoken)
        Axios.post('http://localhost:3001/api/comment',
            //  {headers: {
            //       Authorization: LStoken
            //  }},
            {
                content: comment

            })
        setIsOpenCommentModal(!isOpenCommentModal)
        setComments([...comments, { comment: comment }])
    }, [comment])


    return (
        <div>
            <button className="add-comment-btn" onClick={() => setIsOpenCommentModal(true)}>Add a comment</button>

            <AddCommentModal open={isOpenCommentModal} onClose={() => setIsOpenCommentModal(false)}>
                <textarea className="input-content" placeholder="Add a comment" name="content" type="text"
                    onChange={(e) => {
                        setComment(e.target.value)
                    }}></textarea>
                <button className="submit-btn" onClick={submitComment} >SUBMIT</button>
            </AddCommentModal>


            <div className="comment-section">
                {comments.map((comment) => {
                    return (
                        <div className="comment-single">
                            <p>{comment.content}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )


}
