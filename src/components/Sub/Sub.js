import React from 'react'
import './Sub.css';

export function Sub(props){

    const handleClick = (e) => {
        console.log(e.target.value);
        props.handleSubChange(props.sub.display_name)
    }

    return (
        <div>
            <h4 onClick={handleClick}>{props.sub.display_name}</h4>
        </div>
    )
}