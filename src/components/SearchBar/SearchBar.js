import React, {useState} from 'react'
import './SearchBar.css';

export function SearchBar(props){

    const [term, setTerm] = useState();

    const handleSubmit = (e) => {
        if(e.key === 'Enter'){
            props.handleSearchChange(term);
        }
    }

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    return (
        <div className='SearchBar'>
            <input onKeyPress={handleSubmit} type='text' placeholder="Search" onChange={handleChange}/>
        </div>
    );
}