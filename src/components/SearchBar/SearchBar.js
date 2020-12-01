import React from 'react'
import './SearchBar.css';

export function SearchBar(props){
    return (
        <div className='SearchBar'>
            <input type='text' placeholder="Search"/>
        </div>
    );
}