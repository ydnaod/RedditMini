import React from 'react';
import './Comment.css';

export function Comment(props){
    return (
        <div className="Comment">
            <div className="commentContent">
                <h5>{props.author}</h5>
                <h5>{props.body}</h5>
            </div>
            <div>
                <h6>{props.created_utc}</h6>
            </div>
        </div>
    );
}