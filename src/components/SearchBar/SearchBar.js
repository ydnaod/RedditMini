import React from 'react'
import './SearchBar.css';

export function SearchBar(props){

    const handleChange = (e) => {
        const text = e.target.value;
        props.handleSearchChange(text);
    }

    return (
        <div className='SearchBar'>
            <input onChange={handleChange}type='text' placeholder="Search"/>
        </div>
    );
}