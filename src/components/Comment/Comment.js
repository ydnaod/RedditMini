import React from 'react';
import './Comment.css';
import userIcon from '../../images/user-icon.png'
import ReactMarkdown from 'react-markdown';

export function Comment(props){
    return (
        <div className="Comment">
            <div className="commentDetails">
            <div className="author">
                    <img className="icon" src={userIcon}/>
                    <h5>{props.author}</h5>
                </div>
                <h6 id="date" className="date">{props.created_utc}</h6>
            </div>
            <div className="commentContent">
                <h5 id="commentBody"><ReactMarkdown>{props.body}</ReactMarkdown></h5>
            </div>
        </div>
    );
}