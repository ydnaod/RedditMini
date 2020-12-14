import React from 'react'
import './CommentLoadingDiv.css';

export function CommentLoadingDiv(){
    return (
    <div className="Comment">
        <div className="commentContent">
            <div className="author">
                <h5 className="gradient">author</h5>
            </div>
            <h5 className="gradient">
                content<br/>
                content<br/>
            </h5>
        </div>
        <div className="date">
            <h6 className="gradient">date</h6>
        </div>
    </div>
    );
}