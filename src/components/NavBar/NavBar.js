import React from 'react'
import { render } from 'react-dom'
import {SearchBar} from '../SearchBar/SearchBar'
import './NavBar.css'

export function NavBar(props){
    return (
        <div className='NavBar'>
            <h1 className='brand'>RedditMini</h1>
            <SearchBar searchResults={props.searchResults}
                handleSearchChange={props.handleSearchChange}/>
            <div></div>
        </div>
    );
}