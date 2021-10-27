import {useEffect, useState} from 'react'
import axios from 'axios'
import Comment from '../../types/Comment'
import SingleComment from './SingleComment'
import CommentBox from './CommentBox'
import styles from '../../styles/Components.module.scss'

export const BASE_URL = 'https://comments.lwqwq.com/rinment/'

export default function RinMent({slug}) {
    const [comments, setComments] = useState<Comment[]>([])
    const [error, setError] = useState('')
    useEffect(() => {
        axios.get(BASE_URL + slug)
            .then(res => setComments(res.data.data))
            .catch(e=>{
                console.log(e)
                setError(e.message)
            })
    }, [])

    if(error){
        return <div className={styles.commentBox}>
            评论系统暂时不可用⁄(⁄ ⁄•⁄-⁄•⁄ ⁄)⁄
            <p>{error}</p>
        </div>
    }

    return <div>
        <CommentBox slug={slug} addComment={addComment}/>
        {comments.map(e => <SingleComment comment={e} key={e._id}/>)}
    </div>

    function addComment(comment: Comment) {
        setComments([...comments, comment])
    }
}
