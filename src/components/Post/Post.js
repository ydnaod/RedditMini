import React from 'react'
import './Post.css';

export function Post(props){
    return(
        <div className="Post">
            <h2>A real reddit post</h2>
            <h1>{props.post.name}</h1>
        </div>
    );
}