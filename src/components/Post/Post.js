import React from 'react'
import './Post.css';
import userIcon from '../../images/user-icon.png'
import {Score} from '../Score/Score';

export function Post(props){

    let isImage = false;
    if(props.post.post_hint === 'image'){
        isImage = true;
    }

    return(
        <div className="Post">
            <Score score={props.post.score}/>
            <div className="postContent">
                <a rel="noreferrer" href={props.post.url} target='_blank'><h3>{props.post.title}</h3></a>
                {isImage && <img src={props.post.url}/>}
                <div className="postDetails">
                    <div className="author">
                        <img className="icon" src={userIcon}/>
                        <h5>{props.post.author}</h5>
                    </div>
                    <h5>{props.post.created_utc}</h5>
                    <h5>{props.post.num_comments} comments</h5>
                </div>
            </div>
        </div>
    );
}