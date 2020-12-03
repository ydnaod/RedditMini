import React from 'react'
import './Post.css';

export function Post(props){
    const loadingDiv = <h3>Loading...</h3>;

    let imageBool = false;
    if(props.post.post_hint === 'image'){
        imageBool = true;
    }

    return(
        <div className="Post">
            <h2>{props.post ? props.post.title : loadingDiv}</h2>
            {imageBool && <img src={props.post.url}/>}
        </div>
    );
}