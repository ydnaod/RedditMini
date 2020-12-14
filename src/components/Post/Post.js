import React, {useState} from 'react'
import './Post.css';
import userIcon from '../../images/user-icon.png'
import {Score} from '../Score/Score';
import {CommentList} from '../CommentList/CommentList'

export function Post(props){

    const [commentToggle, setCommentToggle] = useState(false);

    let isImage = false;
    if(props.post.post_hint === 'image'){
        isImage = true;
    }

    const comments = <CommentList id={props.post.id}
    subreddit={props.post.subreddit}/>;

    const handleCommentToggle = () => {
        setCommentToggle(!commentToggle);
    }

    return(
        <div className="Post">
            <Score score={props.post.score}/>
            <div className="postContent">
                <a id="title" rel="noreferrer" href={props.post.url} target='_blank'><h3>{props.post.title}</h3></a>
                {isImage && <img src={props.post.url}/>}
                <div className="postDetails">
                    <div className="author">
                        <img className="icon" src={userIcon}/>
                        <h5>{props.post.author}</h5>
                    </div>
                    <h5>{props.post.created_utc}</h5>
                    <h5 className="commentsButton"onClick={handleCommentToggle}>{props.post.num_comments} comments</h5>
                </div>
                <div>
                        {commentToggle ? comments : ''}
                </div>
            </div>
        </div>
    );
}
