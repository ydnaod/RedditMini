import React from 'react';
import {Post} from '../Post/Post'
import './PostList.css';

export function PostList(){
    return (
        <div>
            <Post />
            <Post />
        </div>
    );
}