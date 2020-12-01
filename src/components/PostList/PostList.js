import React from 'react';
import {Post} from '../Post/Post'
import './PostList.css';

export function PostList(){
    return (
        <div className="PostList">
            <Post />
            <Post />
        </div>
    );
}