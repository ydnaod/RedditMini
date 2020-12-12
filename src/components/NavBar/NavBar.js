import React from 'react'
import { render } from 'react-dom'
import { SearchBar } from '../SearchBar/SearchBar'
import './NavBar.css'
import redditLogo from '../../images/reddit-logo.png'

export function NavBar(props) {
    return (
        <div className='NavBar'>
            <div className="logo">
                <img className = "image" src={redditLogo}/>
                <h1 className='brand'>Reddit<span className="orange">Mini</span></h1>
            </div>
            <SearchBar searchResults={props.searchResults}
                handleSearchChange={props.handleSearchChange} />
            <div></div>
        </div>
    );
}