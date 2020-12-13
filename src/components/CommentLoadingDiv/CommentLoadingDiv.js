import React from 'react'
import './CommentLoadingDiv.css';

export function CommentLoadingDiv(){
    return (
        <div className="LoadingDiv">
            <div className="votes">
                <h6 className='gradient'>6</h6>
            </div>
            <div className="postContent">
                <h3 className='gradient'>content</h3>
                <div className='bigBox gradient'>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                </div>
                <div className="postDetails">
                    <h5 className='gradient'>content</h5>
                    <h5 className='gradient'>content</h5>
                    <h5 className='gradient'>content</h5>
                </div>
            </div>
        </div>
    );
}