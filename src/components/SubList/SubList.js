import React from 'react'
import {Sub} from '../Sub/Sub'
import './SubList.css'

export function SubList(){
    return (
        <div className="SubList">
            <h1>SubReddits</h1>
            <Sub />
            <Sub />
        </div>
    );
}