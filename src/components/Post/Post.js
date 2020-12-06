import React, {useState} from 'react'
import './Post.css';

export function Post(props){
    const loadingDiv = <h3>Loading...</h3>;

    let hiddenStyle = {
        
    };

    if(props.post.hidden){
        hiddenStyle = {
            display: 'none'
        };
    }

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
        <div className="Post" style={hiddenStyle}>
            <div className="votes">
                <h6>{score}</h6>
            </div>
            <div className="postContent">
                <h3>{props.post ? props.post.title : loadingDiv}</h3>
                {isImage && <img src={props.post.url}/>}
                <div className="postDetails">
                    <h5>{props.post.author}</h5>
                    <h5>{props.post.created_utc}</h5>
                    <h5>{props.post.num_comments} comments</h5>
                </div>
            </div>
        </div>
    );
}