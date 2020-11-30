import React from 'react'
import { render } from 'react-dom'
import {SearchBar} from '../SearchBar/SearchBar'

export function NavBar(){
    return (
        <div>
            <h1>RedditMini</h1>
            <SearchBar />
        </div>
    );
}