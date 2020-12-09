import React from 'react'
import './Post.css';
import userIcon from '../../images/user-icon.png'

export function Post(props){
    const loadingDiv = <h3>Loading...</h3>;

    let isImage = false;
    if(props.post.post_hint === 'image'){
        isImage = true;
    }

    let score = props.post.score;
    if(score > 999){
        score /= 1000;
        score = score.toFixed(1);
        score = score + 'k';
    }

    return(
        <div className="Post">
            <div className="votes">
                <i className="arrow up"></i>
                <h6>{score}</h6>
                <i className="arrow down"></i>
            </div>
            <div className="postContent">
                <a rel="noreferrer" href={props.post.url} target='_blank'><h3>{props.post ? props.post.title : loadingDiv}</h3></a>
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