import React from 'react';
import {Post} from '../Post/Post'
import './PostList.css';

export function PostList(props){
    return (
        <div className="PostList">
            <Post />
            <Post />
            {
                props.loadedContent.map(post => {
                    return <Post post={post}
                                key = {post.id}
                            />
                })
            }
        </div>
    );
}